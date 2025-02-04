import { StyleSheet, View, Button, Alert } from "react-native";
import Colors from "../utils/colors";
import Reel from "./game/Reel";

interface Symbol {
  name: string;
  imagePath: string;
  multiplier: number;
}

interface GameProps {
  reels: Symbol[][];
}
const Game: React.FC<GameProps> = ({ reels }) => {
  return (
    <View style={styles.gameContainer}>
      <Reel symbols={reels[0]} />
      <View style={styles.verticalBar} />
      <Reel symbols={reels[1]} />
      <View style={styles.verticalBar} />
      <Reel symbols={reels[2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    width: "70%",
    height: "70%",
    marginTop: -15,
    backgroundColor: Colors.DeepNavyBlue,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.GoldYellow,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  verticalBar: {
    width: 1,
    borderWidth: 1,
    borderColor: Colors.GoldYellow,
    backgroundColor: Colors.GoldYellow,
    height: "90%",
    borderRadius: 50,
  },
});

export default Game;
