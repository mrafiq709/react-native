import React from "react";
import { View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButtn from './app/component/AppButton';
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <AppButtn title="Login" onPress={() => console.log("tapped")}/>
    </View>
  );
}
