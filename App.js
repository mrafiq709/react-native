import React from "react";
import { View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './app/component/AppText';
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <View
      style={{
        backgroundColor: "dodgerblue",
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 10,
        borderTopWidth: 20,
        borderTopLeftRadius: 50,
      }}
     >
     </View>
    </View>
  );
}
