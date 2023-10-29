import { Tabs } from 'expo-router';

export default () => {
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
