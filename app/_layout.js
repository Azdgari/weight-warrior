import { Stack, useRouter } from 'expo-router';

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: 'Home', headerShown: false }}
      />
    </Stack>
  );
}
