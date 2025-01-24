import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import GoalsList from "./components/GoalsList";
import GoalInput from "./components/GoalInput";

export default function App() {
  interface CourseGoals {
    id: string;
    content: string;
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);

  const handleStartAddGoal = () => {
    setModalIsVisible(true);
  };

  const handleEndAddGoal = () => {
    setModalIsVisible(false);
  };

  const removeGoalHandler = (id: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button title="Add New Goal" onPress={handleStartAddGoal} />
      </View>

      <GoalInput
        goalText={goalText}
        setGoalText={setGoalText}
        courseGoals={courseGoals}
        setCourseGoals={setCourseGoals}
        visible={modalIsVisible}
        endAddGoal={handleEndAddGoal}
      />
      <GoalsList courseGoals={courseGoals} onDeleteGoal={removeGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 24,
    backgroundColor: "rgb(107, 107, 107)",
  },
  button: {
    marginVertical: 32,
    width: "50%",
  },
});
