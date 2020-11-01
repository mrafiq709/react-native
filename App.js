import React from "react";
import { View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButtn from './app/component/AppButton';
import Card from "./app/component/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 50,
      }}
    >
      <Card
        title="Red jacker for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );
}
