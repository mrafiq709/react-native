import React from "react";
import { View } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
