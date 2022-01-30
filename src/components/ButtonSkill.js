import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonSkill({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370f7",
    padding: 10,
    borderRadius: 7,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});
