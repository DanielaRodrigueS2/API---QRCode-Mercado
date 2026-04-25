import { Stack } from 'expo-router';
import { StackScreen } from 'react-native-screens';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name='Home' options={{headerShown: false}} />
      </Stack>
  );
}
