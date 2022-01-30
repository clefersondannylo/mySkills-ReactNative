import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.wrapperSkills}>
      <Text style={styles.textSkills}> {skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapperSkills: {
    backgroundColor: "#1f1e25",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkills: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
