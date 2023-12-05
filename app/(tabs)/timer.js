import { useState, useContext } from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { AppStateContext } from '../appStateContext';
import styles from '../assets/styles';
import { Feather } from '@expo/vector-icons';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';

export default function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { timerSettings, setTimerSettings } = useContext(AppStateContext);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Pressable
          onPress={() => {
            if (timerSettings > 0) {
              setIsPlaying((prev) => !prev);
            } else {
              alert('Please set a timer length');
            }
          }}
        >
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={timerSettings}
            initialRemainingTime={timerSettings}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            size={250}
            strokeWidth={12}
            onUpdate={(remainingTime) => {
              console.log('Counter is ', timerSettings);
              console.log('Remaining time is ', remainingTime);
              if (remainingTime === 0) {
                setIsPlaying(false);
                alert('Time is up!');
              }
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
