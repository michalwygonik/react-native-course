import { StyleSheet, View } from "react-native";
import Game from "../components/Game";
import GameBar from "../components/GameBar";
import GameHeader from "../components/GameHeader";

const LandingScreen: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <GameHeader />
      <Game />
      <GameBar />
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
