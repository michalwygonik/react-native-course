import { StyleSheet, Text, View } from "react-native";
import StartGame from "./screens/StartGame";

const GuessTheNumber: React.FC = () => {
  return (
    <View>
      <Text>Guess the Number</Text>
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuessTheNumber;
