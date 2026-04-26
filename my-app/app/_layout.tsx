import { Stack } from 'expo-router';
import { StackScreen } from 'react-native-screens';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
      <Stack initialRouteName='Home'>
        <Stack.Screen name='Home' options={{headerShown: false}} /> 
        <Stack.Screen name='Carrinho' options={{headerShown: false}} />
      </Stack>
  );
}
