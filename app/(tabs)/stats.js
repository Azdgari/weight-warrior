import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../assets/styles';
import NewEntryModal from '../(modals)/newEntryModal';
import StackLayout from '../_layout';
import { AppStateContext } from '../appStateContext';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Stats = () => {
  const { sharedState, setSharedState } = useContext(AppStateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'exercises'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSharedState(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

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
