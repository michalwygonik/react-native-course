import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import LessonsList from "./src/lessons/lessons";
import { useState } from "react";

export default function App() {
  interface CourseGoals {
    id: string;
    content: string;
  }
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);

  const handleTextChange = (e: string) => {
    setGoalText(e);
  };

  const handleAddGoal = () => {
    if (goalText.trim().length === 0) {
      Alert.alert("Something went wrong, text is empty");
      return;
    }

    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), content: goalText },
    ]);
    setGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={handleTextChange}
        />
        <Button title="Add Goal!" onPress={handleAddGoal} />
      </View>
      <LessonsList courseGoals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 24,
  },
  inputContainer: {
    flex: 2,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
