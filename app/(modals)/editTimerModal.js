import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { AppStateContext } from '../appStateContext';
import styles from '../assets/styles';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';
import { getDatabase, ref, set } from 'firebase/database';
import { rtdb } from '../firebaseConfig';
import { Picker } from '@react-native-picker/picker';

const updateDefaultCount = (newCount) => {
  set(ref(rtdb, 'defaultCount'), newCount);
};

const editTimerModal = () => {
  const router = useRouter();
  const { timerSettings, setTimerSettings } = useContext(AppStateContext);

  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const handleTimerInput = (newTimerValue) => {
    setTimerSettings(newTimerValue);
    updateDefaultCount(newTimerValue);
    console.log('Timer value: ', timerSettings);
    router.back();
  };

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>
          Enter timer length - current length: {timerSettings}
        </Text>

        <Picker
          selectedValue={timerSettings}
          onValueChange={(itemValue, itemIndex) => setTimerSettings(itemValue)}
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
          onPress={() => handleTimerInput(timerSettings)}
        >
          <Text style={styles.chooseButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default editTimerModal;
