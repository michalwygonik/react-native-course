import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ScreenName } from "./constant/ScreenName";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.Home>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(ScreenName.TodoGoals)}
        >
          <Text style={styles.containerItemText}>Todo Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(ScreenName.GuessTheNumber)}
        >
          <Text style={styles.containerItemText}>Guess the Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(ScreenName.FreeSpinJoker)}
        >
          <Text style={styles.containerItemText}>Free Spin Joker 🃏</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate(ScreenName.Meals)}
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
