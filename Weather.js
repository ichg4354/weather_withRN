import React from "react";
import PropType, { number } from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <Feather name="sun" size={80} color="black" />
        <Text style={styles.temp}>{temp.toFixed(1)}&deg;</Text>
      </View>
      <View style={styles.half}></View>
    </View>
  );
}

Weather.PropType = {
  temp: PropType.number.isRequired,
  condition: PropType.string.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  half: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
  },
});
