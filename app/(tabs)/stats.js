import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExerciseEntry from '../components/exerciseEntry';
import styles from '../assets/styles';

const exerciseData = [
  {
    id: '1',
    title: 'Item 1',
    exerciseType: 'Bench Press',
    exerciseWeight: '135',
    exerciseReps: '10',
    exerciseSets: '3',
  },
  {
    id: '2',
    title: 'Item 2',
    exerciseType: 'Deadlift',
    exerciseWeight: '200',
    exerciseReps: '6',
    exerciseSets: '3',
  },
  {
    id: '3',
    title: 'Item 3',
    exerciseType: 'Squat',
    exerciseWeight: '185',
    exerciseReps: '8',
    exerciseSets: '3',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {exerciseData.map((item) => (
          <View key={item.id} style={styles.exerciseWrapper}>
            <Text style={styles.exercise}>{item.exerciseType}</Text>
            <Text style={styles.weight}>{item.exerciseWeight} KG</Text>
            <View style={styles.repsContainer}>
              <Text style={styles.reps}>Reps: {item.exerciseReps}</Text>
              <Text style={styles.sets}>Sets: {item.exerciseSets}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
