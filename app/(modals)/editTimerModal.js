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
  const [currentNumber, setCurrentNumber] = useState(60);

  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const numberChangeHandler = (number) => {
    setCurrentNumber(number);
  };

  const handleTimerInput = (currentData) => {
    setTimerSettings(currentData);
    console.log('Timer value: ', timerSettings);
    console.log('Current number: ', currentNumber);
    router.back();
  };

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>
          Enter timer length - current length: {currentNumber}
        </Text>

        <Picker
          selectedValue={currentNumber}
          onValueChange={(itemValue, itemIndex) =>
            numberChangeHandler(itemValue)
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
        <Pressable
          style={styles.chooseButton}
          onPress={() => handleTimerInput(currentNumber)}
        >
          <Text style={styles.chooseButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default editTimerModal;
