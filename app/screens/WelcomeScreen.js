import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../component/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
  }
});

export default WelcomeScreen;
