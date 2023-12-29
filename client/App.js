import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    // Now, you need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:
    <NavigationContainer>
      <StatusBar/>
      <StackNavigator/>
    </NavigationContainer>
  );
}
