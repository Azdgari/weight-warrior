import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { AppStateContext } from '../appStateContext';
import styles from '../assets/styles';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Picker } from '@react-native-picker/picker';

const editTimerModal = () => {
  const router = useRouter();
  const { timerSettings, setTimerSettings } = useContext(AppStateContext);

  const [selectedLanguage, setSelectedLanguage] = useState();
  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const handleTimerInput = async () => {
    const tempId = Date.now().toString();
    const newTimer = {
      id: tempId,
      selectedLanguage: selectedLanguage,
    };

    setTimerSettings((currentData) => [...currentData, newTimer]);
    // console.log('sharedState is ', { timerSettings });
    router.back();

    try {
      const docRef = await addDoc(collection(db, 'timers'), newTimer);
      console.log('Document written with ID: ', docRef.id);
      const addedTimer = { ...newTimer, id: docRef.id };
      // setTimerData([...timerData, addedTimer]);
      setTimerSettings((currentData) =>
        currentData.map((item) =>
          item.id === tempId ? { ...item, id: docRef.id } : item
        )
      );
    } catch (error) {
      console.log('Error adding document: ', error);
    }

    setSelectedLanguage('');
  };

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>
          Enter timer length - current length: {selectedLanguage}
        </Text>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          {numbers.map((number) => (
            <Picker.Item
              label={number.toString()}
              value={number}
              key={number.toString()}
              color={'white'}
            />
          ))}
        </Picker>
        <Pressable style={styles.chooseButton} onPress={handleTimerInput}>
          <Text style={styles.chooseButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default editTimerModal;
