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
        <View style={styles.containerItem}>
          <Text style={styles.containerItemText}>Application 2</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.containerItemText}>Application 3</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={styles.containerItemText}>Application 4</Text>
        </View>
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
