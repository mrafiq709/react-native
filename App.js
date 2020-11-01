import React from "react";
import { View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './app/component/AppText'; // Fro android => AppText.andoid.js
// For ios => AppText.ios.js (automatic)
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <AppText>I Love React Native</AppText>
    </View>
  );
}
