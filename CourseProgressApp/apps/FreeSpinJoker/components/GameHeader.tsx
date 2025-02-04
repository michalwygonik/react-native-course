import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

const GameHeader: React.FC = () => {
  return (
    <View style={styles.gameBarContainer}>
      <View>
        <Text style={styles.sideText}>Balance</Text>
      </View>
      <View>
        <Text style={styles.title}>Free Spin Joker</Text>
      </View>
      <View>
        <Text style={styles.sideText}>Options</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameBarContainer: {
    width: "90%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.BrightWhite,
    fontWeight: "700",
    letterSpacing: 1,
  },
  sideText: {
    fontSize: 12,
    color: Colors.BrightWhite,
  },
});
export default GameHeader;
