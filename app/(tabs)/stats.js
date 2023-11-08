import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../assets/styles';
import NewEntryModal from '../newEntryModal';
import StackLayout from '../_layout';

const exerciseData = [
  // {
  //   id: '1',
  //   title: 'Item 1',
  //   exerciseType: 'Bench Press',
  //   exerciseWeight: '135',
  //   exerciseReps: '10',
  //   exerciseSets: '3',
  // },
  // {
  //   id: '2',
  //   title: 'Item 2',
  //   exerciseType: 'Deadlift',
  //   exerciseWeight: '200',
  //   exerciseReps: '6',
  //   exerciseSets: '3',
  // },
  // {
  //   id: '3',
  //   title: 'Item 3',
  //   exerciseType: 'Squat',
  //   exerciseWeight: '185',
  //   exerciseReps: '8',
  //   exerciseSets: '3',
  // },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const [exerciseData, setExerciseData] = useState([]);

  const addExerciseData = (name, weight, reps, sets) => {
    const newExercise = {
      id: Math.random().toString(),
      exerciseName: name,
      exerciseWeight: weight,
      exerciseReps: reps,
      exerciseSets: sets,
    };
    setExerciseData((currentData) => [...currentData, newExercise]);

    exerciseData.forEach((item) => {
      console.log(item);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {exerciseData.map((item) => (
          <View key={item.id} style={styles.exerciseWrapper}>
            <Text style={styles.exercise}>{item.exerciseName}</Text>
            <Text style={styles.weight}>{item.exerciseWeight} KG</Text>
            <View style={styles.repsContainer}>
              <Text style={styles.reps}>Reps: {item.exerciseReps}</Text>
              <Text style={styles.sets}>Sets: {item.exerciseSets}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* <NewEntryModal onAddExercise={addExerciseData} /> */}
    </View>
  );
};

export default App;
