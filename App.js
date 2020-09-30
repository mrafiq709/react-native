import React from "react";
import { View } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 2,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
