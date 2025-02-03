import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import Colors from "../utils/colors";
import Reel from "./game/Reel";

// List of symbols for reels (you can replace these with image paths later)
const reelSymbols = ["red", "blue", "green", "yellow", "purple"];

const Game: React.FC = () => {
  const [reels, setReels] = useState<string[][]>([[], [], []]);

  // Function to generate random symbols for the reels
  const generateReels = () => {
    const newReels = Array.from({ length: 3 }, () => {
      return Array.from(
        { length: 3 },
        () => reelSymbols[Math.floor(Math.random() * reelSymbols.length)]
      );
    });
    setReels(newReels);
  };

  console.log(reels);

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
