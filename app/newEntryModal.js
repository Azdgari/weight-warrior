import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import styles from './assets/styles';

const newEntryModal = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseWeight, setExerciseWeight] = useState('');
  const [exerciseReps, setExerciseReps] = useState('');
  const [exerciseSets, setExerciseSets] = useState('');

  return (
    <View>
      <Text>New Exercise</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={'Name of exercise'} />
        <TextInput style={styles.input} placeholder={'Current weight'} />
        <TextInput style={styles.input} placeholder={'Number of reps'} />
        <TextInput style={styles.input} placeholder={'Number of sets'} />
      </View>
    </View>
  );
};

export default newEntryModal;
