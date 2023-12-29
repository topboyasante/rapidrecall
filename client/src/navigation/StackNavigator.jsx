import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown:false,
          }}
        />
    </Stack.Navigator>
  )
}