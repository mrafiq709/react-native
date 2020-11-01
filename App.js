import React from "react";
import { View, Text } from "react-native";
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
     <Text
      style={{
        //fontFamily: "Roboto",
        fontSize: 30,
        fontStyle: "italic",
        color: "tomato",
        textTransform: "capitalize",
        //textDecorationLine: "line-through",
        textAlign: "center",
        lineHeight: 30,
      }}
     >
      i love react native. this is my first reactnative apps. here is some more text.
     </Text> 
    </View>
  );
}
