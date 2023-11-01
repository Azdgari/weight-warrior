import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import styles from './assets/styles';
import colors from './assets/colors';

const newEntryModal = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseWeight, setExerciseWeight] = useState('');
  const [exerciseReps, setExerciseReps] = useState('');
  const [exerciseSets, setExerciseSets] = useState('');

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>Name</Text>
        <TextInput
          style={styles.nameInput}
          placeholder={'Give a name'}
          placeholderTextColor={colors.placeholderText}
        />

        <Text style={styles.inputTitles}>Weight</Text>
        <View style={styles.numericalInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Current weight'}
            placeholderTextColor={colors.placeholderText}
          />
          <Pressable style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose</Text>
          </Pressable>
        </View>

        <Text style={styles.inputTitles}>Reps</Text>
        <View style={styles.numericalInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Number of reps'}
            placeholderTextColor={colors.placeholderText}
          />
          <Pressable style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose</Text>
          </Pressable>
        </View>

        <Text style={styles.inputTitles}>Sets</Text>
        <View style={styles.numericalInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Number of sets'}
            placeholderTextColor={colors.placeholderText}
          />
          <Pressable style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default newEntryModal;
