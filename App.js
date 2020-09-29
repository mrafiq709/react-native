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
} from "react-native";
import { NativeModules } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <Button
        color="orange"
        title="Clicke Me"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "YES", onPress: () => console.log("YES") },
            { text: "NO", onPress: () => console.log("NO") },
          ])
        }
      />
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
