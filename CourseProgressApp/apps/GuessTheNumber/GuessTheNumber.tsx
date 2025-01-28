import { ImageBackground, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./screens/Game";

const GuessTheNumber: React.FC = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const pickedNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGame onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = <Game />;
  }
  return (
    <LinearGradient colors={["#6106bd", "#e3ba81"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
});

export default GuessTheNumber;
