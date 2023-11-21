import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { AppStateContext } from '../appStateContext';
import styles from '../assets/styles';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const editTimerModal = () => {
  const router = useRouter();
  const { sharedState, setSharedState } = useContext(AppStateContext);

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>Name</Text>
      </View>
    </View>
  );
};

export default editTimerModal;
