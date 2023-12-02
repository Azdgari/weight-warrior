import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { AppStateContext } from '../appStateContext';
import styles from '../assets/styles';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const NewEntryModal = () => {
  const router = useRouter();
  const { exerciseEntries, setExerciseEntries } = useContext(AppStateContext);

  const [exerciseName, setExerciseName] = useState();
  const [exerciseWeight, setExerciseWeight] = useState();
  const [exerciseReps, setExerciseReps] = useState();
  const [exerciseSets, setExerciseSets] = useState();

  const [exerciseData, setExerciseData] = useState([]);

  const handleExerciseInput = async () => {
    const tempId = Date.now().toString();
    const newEntry = {
      id: tempId,
      exerciseName: exerciseName,
      exerciseWeight: exerciseWeight,
      exerciseReps: exerciseReps,
      exerciseSets: exerciseSets,
    };

    setExerciseEntries((currentData) => [...currentData, newEntry]);
    router.back();

    try {
      const docRef = await addDoc(collection(db, 'exercises'), newEntry);
      console.log('Document written with ID: ', docRef.id);
      const addedEntry = { ...newEntry, id: docRef.id };
      // setExerciseData([...exerciseData, addedEntry]);
      setExerciseEntries((currentData) =>
        currentData.map((item) =>
          item.id === tempId ? { ...item, id: docRef.id } : item
        )
      );
    } catch (error) {
      console.log('Error adding document: ', error);
    }

    setExerciseName('');
    setExerciseWeight('');
    setExerciseReps('');
    setExerciseSets('');
  };

  return (
    <View style={styles.newExerciseModal}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitles}>Name</Text>
        <TextInput
          style={styles.nameInput}
          placeholder={'Give a name'}
          placeholderTextColor={colors.placeholderText}
          value={exerciseName}
          onChangeText={(text) => setExerciseName(text)}
        />

        <Text style={styles.inputTitles}>Weight</Text>
        <View style={styles.numericalInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Current weight'}
            placeholderTextColor={colors.placeholderText}
            keyboardType="numeric"
            value={exerciseWeight}
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
            value={exerciseReps}
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
            value={exerciseSets}
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
