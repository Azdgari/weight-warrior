import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name="newEntryModal"
        options={{
          presentation: 'modal',
          headerTitle: 'New Exercise',
        }}
      />
    </Stack>
  );
}
