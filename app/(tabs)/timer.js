import * as React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styles from '../assets/styles';
import { Feather } from '@expo/vector-icons';
import colors from '../assets/colors';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Pressable onPress={() => setIsPlaying((prev) => !prev)}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            size={250}
            strokeWidth={12}
            // trailStrokeWidth={16}
            trailColor={colors.primary}
            strokeLinecap="round"
          >
            {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40, fontWeight: 'bold' }}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </Pressable>
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
