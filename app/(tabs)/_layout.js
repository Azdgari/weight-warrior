import { Tabs, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import colors from '../assets/colors';

export default () => {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: {
          backgroundColor: colors.background,
          // borderTopColor: colors.background,
        },
        // tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tabs.Screen
        name="timer"
        options={{
          title: 'Timer',
          headerStyle: { backgroundColor: colors.navigationText },
          headerTintColor: 'white',
          tabBarLabel: 'Timer',
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={size} color={color} />
          ),
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <Pressable
              color="white"
              title="New"
              onPress={() => router.push('editTimerModal')}
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
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: 'white',
        }}
      />
    </Tabs>
  );
};
