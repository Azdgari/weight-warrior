import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import styles from './assets/styles';
import colors from './assets/colors';

const NewEntryModal = () => {
  const [exerciseName, setExerciseName] = useState();
  const [exerciseWeight, setExerciseWeight] = useState();
  const [exerciseReps, setExerciseReps] = useState();
  const [exerciseSets, setExerciseSets] = useState();

  const exerciseData = [];

  const handleExerciseInput = () => {
    exerciseData.push({
      id: Math.random().toString(),
      exerciseName: exerciseName,
      exerciseWeight: exerciseWeight,
      exerciseReps: exerciseReps,
      exerciseSets: exerciseSets,
    });
    setExerciseName(null);
    setExerciseWeight('');
    setExerciseReps('');
    setExerciseSets('');

    console.log(exerciseData);
  };

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>Name</Text>
        <TextInput
          style={styles.nameInput}
          placeholder={'Give a name'}
          placeholderTextColor={colors.placeholderText}
          onChangeText={(text) => setExerciseName(text)}
        />

        <Text style={styles.inputTitles}>Weight</Text>
        <View style={styles.numericalInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Current weight'}
            placeholderTextColor={colors.placeholderText}
            keyboardType="numeric"
            onChangeText={(text) => setExerciseWeight(text)}
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
            keyboardType="numeric"
            onChangeText={(text) => setExerciseReps(text)}
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
            keyboardType="numeric"
            onChangeText={(text) => setExerciseSets(text)}
          />
          <Pressable style={styles.chooseButton}>
            <Text style={styles.chooseButtonText}>Choose</Text>
          </Pressable>
        </View>
        <Pressable style={styles.chooseButton} onPress={handleExerciseInput}>
          <Text style={styles.chooseButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewEntryModal;
