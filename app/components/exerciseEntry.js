import { View, Text, Stylesheet } from 'react-native';
import { useState } from 'react';

export default ExerciseEntry = (props) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseWeight, setExerciseWeight] = useState('');
  const [exerciseReps, setExerciseReps] = useState('');
  const [exerciseSets, setExerciseSets] = useState('');
  return (
    <View>
      <Text>{props.text}</Text>
      <Text></Text>
    </View>
  );
};
