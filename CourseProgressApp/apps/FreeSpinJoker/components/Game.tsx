import { StyleSheet, View } from "react-native";
import Colors from "../utils/colors";
import Reel from "./game/Reel";

const Game: React.FC = () => {
  return (
    <View style={styles.gameContainer}>
      <Reel />
      <Reel />
      <Reel />
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    width: "70%",
    height: "70%",
    backgroundColor: Colors.DeepNavyBlue,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.GoldYellow,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Game;
