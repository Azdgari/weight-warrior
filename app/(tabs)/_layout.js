import { Tabs, useRouter } from 'expo-router';
import { Button } from 'react-native';

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
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'white',
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => (
            <Button
              color="white"
              fontWeight="bold"
              title="New"
              onPress={() => router.push('newEntryModal')}
            />
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
