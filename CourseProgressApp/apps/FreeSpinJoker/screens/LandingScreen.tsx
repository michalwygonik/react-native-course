import { StyleSheet, View } from "react-native";
import Game from "../components/Game";
import GameBar from "../components/GameBar";
import GameHeader from "../components/GameHeader";
import { useState } from "react";
import { generateReels } from "../logic/GenerateReels";

const LandingScreen: React.FC = () => {
  const [reels, setReels] = useState<string[][]>([[], [], []]);

  const handleGenerateReels = () => {
    const newReels = generateReels();
    setReels(newReels);
  };
  return (
    <View style={styles.rootContainer}>
      <GameHeader />
      <Game reels={reels} />
      <GameBar generateReels={handleGenerateReels} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 5,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default LandingScreen;
