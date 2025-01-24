import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export type GoalInputProps = {
  goalText: string;
  setGoalText: (goal: string) => void;
  courseGoals: { id: string; content: string }[];
  setCourseGoals: (courseGoals: { id: string; content: string }[]) => void;
};

const handleTextChange = (
  text: string,
  setGoalText: (goal: string) => void
) => {
  setGoalText(text);
};

const handleAddGoal = (
  goalText: string,
  courseGoals: { id: string; content: string }[],
  setCourseGoals: (courseGoals: { id: string; content: string }[]) => void,
  setGoalText: (goal: string) => void
) => {
  if (goalText.trim().length === 0) {
    Alert.alert("You must provide text");
    return;
  }

  setCourseGoals([
    ...courseGoals,
    { id: Math.random().toString(), content: goalText },
  ]);
  setGoalText("");
};

const GoalInput: React.FC<GoalInputProps> = ({
  goalText,
  setGoalText,
  courseGoals,
  setCourseGoals,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        value={goalText}
        onChangeText={(text) => handleTextChange(text, setGoalText)}
        style={styles.textInput}
      />
      <Button
        title="Add Goal"
        onPress={() =>
          handleAddGoal(goalText, courseGoals, setCourseGoals, setGoalText)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
