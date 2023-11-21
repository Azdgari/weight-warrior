import React, { useContext, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from '../assets/styles';
import { AppStateContext } from '../appStateContext';
import { db } from '../firebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppleStyleSwipeableRow from '../AppleStyleSwipeableRow';

const Stats = () => {
  const { sharedState, setSharedState } = useContext(AppStateContext);

  const handleDelete = async (itemId) => {
    setSharedState((currentData) =>
      currentData.filter((item) => item.id !== itemId)
    );

    try {
      await deleteDoc(doc(db, 'exercises', itemId));
      console.log('Document ' + itemId + ' deleted!');
      setSharedState((currentData) =>
        currentData.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.log('Error deleting document: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'exercises'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSharedState(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={sharedState}
        renderItem={({ item }) => (
          <AppleStyleSwipeableRow onDelete={handleDelete} itemId={item.id}>
            <View style={styles.exerciseWrapper}>
              <Text style={styles.exercise}>{item.exerciseName}</Text>
              <Text style={styles.weight}>{item.exerciseWeight} KG</Text>
              <View style={styles.repsContainer}>
                <Text style={styles.reps}>Reps: {item.exerciseReps}</Text>
                <Text style={styles.sets}>Sets: {item.exerciseSets}</Text>
              </View>
            </View>
          </AppleStyleSwipeableRow>
        )}
        keyExtractor={(item) => item.id}
      />
    </GestureHandlerRootView>
  );
};

export default Stats;
