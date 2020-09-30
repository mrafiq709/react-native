import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { NativeModules } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function App() {
  //console.log(Dimensions.get("screen"));
  //console.log(useDimensions());
  //console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: landscape ? "100%" : "30%",
          backgroundColor: "dodgerblue",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
