import * as React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styles from '../assets/styles';
import { Feather } from '@expo/vector-icons';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [count, setCount] = React.useState(5);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Pressable onPress={() => setIsPlaying((prev) => !prev)}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={count}
            initialRemainingTime={6}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            size={250}
            strokeWidth={12}
            onUpdate={(remainingTime) => {
              console.log('Counter is ', count);
              console.log('Remaining time is ', remainingTime);
            }}
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
        <Pressable style={styles.editTimerButton}>
          <Feather
            name="settings"
            size={35}
            color="white"
            onPress={() => router.push('editTimerModal')}
          />
        </Pressable>
      </View>

      <View></View>
    </View>
  );
}
