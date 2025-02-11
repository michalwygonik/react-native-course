import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./screens/Game";
import Colors from "./utils/colors";
import GameOver from "./screens/GameOver";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../constant/ScreenName";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.GuessTheNumber
>;

const GuessTheNumber: React.FC<Props> = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [roundsNumber, setRoundsNumber] = useState<number>(0);

  const pickedNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const handleStartNewGame = () => {
    setRoundsNumber(0);
    setUserNumber(null);
  };

  let screen = <StartGame onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = (
      <Game
        userNumber={userNumber}
        handleGameOver={handleGameOver}
        setRoundsNumber={setRoundsNumber}
      />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        handleStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.accent500, Colors.primary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
});

export default GuessTheNumber;
