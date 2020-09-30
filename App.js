import React from "react";
import { View } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          flexBasis: 100, // weidth or height
          flexGrow: 1,
          //width: 100,
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
