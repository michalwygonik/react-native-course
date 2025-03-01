import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../constant/ScreenName";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.TodoGoals>;

const TodoGoals: React.FC<Props> = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<
    { id: string; content: string }[]
  >([]);

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
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#1D1D1D",
  },
  button: {
    marginVertical: 32,
    width: "50%",
  },
});

export default TodoGoals;
