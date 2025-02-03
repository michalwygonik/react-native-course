import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";
interface GameBarProps {
  generateReels: () => void; // Accept the generateReels function as a prop
}
const GameBar: React.FC<GameBarProps> = ({ generateReels }) => {
  return (
    <View style={styles.gameBarContainer}>
      <View>
        <Text>left</Text>
      </View>
      <View>
        <Button title="SPIN" onPress={generateReels} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameBarContainer: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: Colors.DarkPurple,

    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: Colors.DeepNavyBlue,
  },
});
export default GameBar;
