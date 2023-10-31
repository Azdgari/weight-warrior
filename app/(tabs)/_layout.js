import { Tabs, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';
import colors from '../assets/colors';

export default () => {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="timer"
        options={{
          title: 'Timer',
          headerStyle: { backgroundColor: 'brown' },
          headerTintColor: 'white',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: 'white',
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <Pressable
              color="white"
              title="New"
              onPress={() => router.push('newEntryModal')}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 28,
                }}
              >
                +
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="howto"
        options={{
          title: 'How To',
          headerStyle: { backgroundColor: 'navy' },
          headerTintColor: 'white',
        }}
      />
    </Tabs>
  );
};
