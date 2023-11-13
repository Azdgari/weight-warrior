import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../assets/styles';
import NewEntryModal from '../newEntryModal';
import StackLayout from '../_layout';
import { AppStateContext } from '../appStateContext';

const Stats = () => {
  const { sharedState } = useContext(AppStateContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {sharedState.map((item) => (
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
    </View>
  );
};

export default Stats;
