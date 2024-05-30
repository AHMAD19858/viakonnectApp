import { Stack } from 'expo-router';
import { Provider } from '@/components/Provider'

export default function RootLayout() {
  return (
    <Provider>
    <Stack >
   
    <Stack.Screen name="details" options={{
          headerShown: true, headerStyle: {
            backgroundColor: '#808080'
          }, headerTitleStyle: { color: 'white' }, title: 'Details',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}/>
      <Stack.Screen name="index" options={{
          headerShown: true, headerStyle: {
            backgroundColor: '#808080'
          }, headerTitleStyle: { color: 'white' }, title: 'Viakonnect News',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}/>
     
    </Stack>
    </Provider>
  );
}
