import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
      />
      <PrimaryButton title="Reset" />
      <PrimaryButton title="Confirm" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#FAC97E",
    elevation: 5,
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset for the shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 4, // Blur radius for the shadow
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    borderBottomColor: "#BB7DFA",
    borderBottomWidth: 2,
    color: "#BB7DFA",
    margin: 8,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default StartGame;
