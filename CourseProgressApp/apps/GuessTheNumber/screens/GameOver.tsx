import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  userNumber: number;
}

const GameOver: React.FC<GameOverProps> = ({ userNumber }) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="Game Over!" />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>

      <PrimaryButton
        title="Start a New Game"
        color={Colors.primary500}
        background="white"
        onPress={() => console.log()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.text,
    fontWeight: 400,
    marginBottom: 36,
    backgroundColor: Colors.accent500,
    padding: 12,
    borderRadius: 24,
  },
  highlight: {
    fontWeight: 600,
    color: Colors.primary400,
  },
});
export default GameOver;
