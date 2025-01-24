import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import GoalsList from "./components/GoalsList";
import GoalInput from "./components/GoalInput";

export default function App() {
  interface CourseGoals {
    id: string;
    content: string;
  }
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);

  const removeGoalHandler = (id: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalText={goalText}
        setGoalText={setGoalText}
        courseGoals={courseGoals}
        setCourseGoals={setCourseGoals}
      />
      <GoalsList courseGoals={courseGoals} onDeleteGoal={removeGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 24,
  },
});
