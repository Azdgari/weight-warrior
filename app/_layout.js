import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';
import colors from './assets/colors';
import { AppStateProvider } from './appStateContext';

export default function StackLayout() {
  const router = useRouter();

  return (
    <AppStateProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="(modals)/newEntryModal"
          options={{
            presentation: 'modal',
            animation: 'fade',
            headerTitle: 'New Exercise',
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: 'white',
          }}
        />
      </Stack>
    </AppStateProvider>
  );
}
