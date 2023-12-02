import { View, Text, TextInput } from 'react-native';
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
  const { sharedState, setSharedState } = useContext(AppStateContext);

  const [selectedLanguage, setSelectedLanguage] = useState();
  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>Enter timer length</Text>

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
      </View>
    </View>
  );
};

export default editTimerModal;
