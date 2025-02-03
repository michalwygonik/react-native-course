import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";
interface StartGameProps {
  onPickNumber: (pickedNumber: number) => void;
}

const StartGame: React.FC<StartGameProps> = ({ onPickNumber }) => {
  const [number, setNumber] = useState<string>("");

  const handleNumberInput = (input: string) => {
    if (/^[0-9]*$/.test(input)) {
      setNumber(input);
    }
  };

  const handleConfirm = () => {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 99) {
      Alert.alert("Invalid number", "Please enter a number between 1 and 99", [
        { text: "Okay", onPress: handleReset },
      ]);
    }
    onPickNumber(parsedNumber);
  };

  const handleReset = () => {
    setNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title title="Guess the Number game" />
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a number below</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          value={number}
          onChangeText={handleNumberInput}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Reset"
            onPress={handleReset}
            background="#eb6b02"
            color={Colors.text}
          />
          <PrimaryButton
            title="Confirm"
            onPress={handleConfirm}
            background="#eb6b02"
            color={Colors.text}
          />
        </View>
      </View>
    </View>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 24,
  },
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: deviceHeight > 350 ? 20 : 60, //60
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary400,
    elevation: 5,
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // Offset for the shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 4, // Blur radius for the shadow
  },
  instructionText: {
    fontSize: 18,
    color: Colors.accent500,
    fontWeight: 300,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    borderBottomColor: Colors.accent400,
    borderBottomWidth: 2,
    color: Colors.accent400,
    margin: 8,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 25,
    marginTop: 24,
  },
});

export default StartGame;
