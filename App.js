import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';
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
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10, // Override padding
          paddingLeft: 30, // Override paddingHorizontal
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            height: 50,
            width: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
          margin: 20,
          marginVertical: 10, // Override margin
        }}
      ></View>
      
    </View>
  );
}
