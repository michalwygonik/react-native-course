import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export type GoalInputProps = {
  goalText: string;
  setGoalText: (goal: string) => void;
  courseGoals: { id: string; content: string }[];
  setCourseGoals: (courseGoals: { id: string; content: string }[]) => void;
  visible: boolean;
  endAddGoal: (goal: boolean) => void;
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
  visible,
  endAddGoal,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your course goal"
          value={goalText}
          onChangeText={(text) => handleTextChange(text, setGoalText)}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() =>
                handleAddGoal(
                  goalText,
                  courseGoals,
                  setCourseGoals,
                  setGoalText
                )
              }
              color="rgb(0, 138, 34)"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => endAddGoal(true)}
              color="rgb(172, 103, 0)"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#cccccc",
    borderRadius: 6,
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
