import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const Game: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Title title="Oponent's Guess" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default Game;
