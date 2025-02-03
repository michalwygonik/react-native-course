import { StyleSheet, View } from "react-native";
import Colors from "../utils/colors";

const Game: React.FC = () => {
  return <View style={styles.gameContainer}></View>;
};

const styles = StyleSheet.create({
  gameContainer: {
    width: "80%",
    height: "80%",
    backgroundColor: Colors.DeepNavyBlue,
    borderWidth: 5,
    borderColor: Colors.GoldYellow,
  },
});
export default Game;
