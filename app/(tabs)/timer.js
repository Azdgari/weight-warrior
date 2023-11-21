import * as React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styles from '../assets/styles';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
          onPress={() => setIsPlaying((prev) => !prev)}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <Button
          title="Toggle Playing"
          onPress={() => setIsPlaying((prev) => !prev)}
        />
      </View>
      <View>
        <Pressable>
          <Feather name="settings" size={24} color="black" />
          {/* <Text style={styles.chooseButtonText}>+</Text> */}
        </Pressable>
      </View>
    </View>
  );
}
