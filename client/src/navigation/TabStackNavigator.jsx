import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home/index"
import AddNote from "../screens/add-note";
import { TabBar } from "./TabBar";

const Tab = createBottomTabNavigator();

export default function TabStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Note" component={AddNote} />
    </Tab.Navigator>
  );
}
