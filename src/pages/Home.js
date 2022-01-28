import React, { useState } from "react";
import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import { ButtonSkill } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleferson</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder="New skill"
        onChangeText={setNewSkill}
      />
      <ButtonSkill />
      <Text style={[styles.title, { marginTop: 20 }]}>My skills</Text>
      {mySkills.map((skill) => (
        <SkillCard />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#121015",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    borderRadius: 7,
    fontSize: 18,
    color: "#fff",
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 20,
  },
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
