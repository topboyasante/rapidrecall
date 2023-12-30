import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStackNavigator from "./TabStackNavigator";
import EditNote from "../screens/edit-note";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={TabStackNavigator} />
      <Stack.Screen name="edit" component={EditNote}/>
    </Stack.Navigator>
  );
}
