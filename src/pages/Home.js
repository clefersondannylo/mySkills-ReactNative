import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleferson</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder="New skill"
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 20 }]}>My skills</Text>
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
});
