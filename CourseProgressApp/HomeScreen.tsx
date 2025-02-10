import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate("Todo Goals")}
        >
          <Text style={styles.containerItemText}>Todo Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate("Guess the Number")}
        >
          <Text style={styles.containerItemText}>Guess the Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate("Free Spin Joker")}
        >
          <Text style={styles.containerItemText}>Free Spin Joker 🃏</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate("Meals")}
        >
          <Text style={styles.containerItemText}>Meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D",
  },
  listContainer: {
    width: "90%",
  },
  containerItem: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 10,
  },
  containerItemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
