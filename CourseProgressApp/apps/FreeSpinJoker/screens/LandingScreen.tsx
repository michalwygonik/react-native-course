import { StyleSheet, View } from "react-native";
import Game from "../components/Game";
import GameBar from "../components/gameBar/GameBar";
import GameHeader from "../components/GameHeader";
import { useEffect, useState } from "react";
import { generateReels } from "../logic/GenerateReels";
import { checkWin } from "../logic/checkWin";
import WinPopup from "./WinPopup";

const LandingScreen: React.FC = () => {
  const [credit, setCredit] = useState<number>(100);
  const [bet, setBet] = useState<number>(0.5);
  const [winAmount, setWinAmount] = useState<number>(0);

  const [reels, setReels] = useState<
    { name: string; imagePath: string; multiplier: number }[][]
  >([[], [], []]);

  const [winningPaylines, setWinningPaylines] = useState<
    { payline: number[][]; multiplier: number }[]
  >([]);

  useEffect(() => {
    // Generate initial reels when the component mounts
    const initialReels = generateReels();
    setReels(initialReels);
  }, []);

  const handleGenerateReels = () => {
    if (credit < bet) {
      console.log("Not enough credit!");
      return;
    }

    const newReels = generateReels();
    setReels(newReels);
    setCredit(credit - bet);
  };

  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [winMessage, setWinMessage] = useState<string>("");

  useEffect(() => {
    if (reels.flat().length > 0) {
      const symbolGrid = reels.map((row) => row.map((cell) => cell.name));
      const wins = checkWin(symbolGrid);
      setWinningPaylines(wins);

      if (wins.length > 0) {
        let winMultiplier = wins.reduce((acc, win) => acc * win.multiplier, 1);
        const calculatedWinAmount = bet * winMultiplier;

        console.log("multiplier: ", winMultiplier);

        console.log("win amount: ", calculatedWinAmount);

        setWinAmount(calculatedWinAmount);
        setCredit((prevCredit) => prevCredit + calculatedWinAmount);

        const message = `${calculatedWinAmount.toFixed(2)}`;
        setWinMessage(message);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 3000);
      } else {
        setWinAmount(0);
      }
    }
  }, [reels]);

  return (
    <View style={styles.rootContainer}>
      <GameHeader />
      <Game reels={reels} />
      <GameBar
        generateReels={handleGenerateReels}
        credit={credit}
        bet={bet}
        setBet={setBet}
        winAmount={winAmount}
      />
      <WinPopup
        modalVisible={modalVisible}
        setVisible={setModalVisible}
        message={winMessage}
      />
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
