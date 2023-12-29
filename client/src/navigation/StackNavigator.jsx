import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStackNavigator from "./TabStackNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={TabStackNavigator} />
    </Stack.Navigator>
  );
}
