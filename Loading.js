import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradienPoint, LinearGradient } from "expo-linear-gradient";

export default function Loading() {
  return (
    <LinearGradient style={styles.container} colors={["#74ebd5", "#ACB6E5"]}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Loading the weather..</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingHorizontal: 10,
    // paddingVertical: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
