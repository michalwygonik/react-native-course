import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame: React.FC = () => {
  return (
    <View>
      <Text>StartGameScreen</Text>
      <PrimaryButton title="Reset" />
      <PrimaryButton title="Confirm" />
    </View>
  );
};

export default StartGame;
