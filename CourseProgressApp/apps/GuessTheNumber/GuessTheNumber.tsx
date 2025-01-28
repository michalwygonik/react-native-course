import { ImageBackground, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

const GuessTheNumber: React.FC = () => {
  return (
    <LinearGradient colors={["#6106bd", "#e3ba81"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
});

export default GuessTheNumber;
