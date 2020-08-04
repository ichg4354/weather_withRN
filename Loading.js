import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading the weather..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#2c2c2c",
  },
});
