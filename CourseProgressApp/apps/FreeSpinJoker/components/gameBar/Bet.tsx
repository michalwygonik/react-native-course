import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

const Bet: React.FC = () => {
  return (
    <View style={styles.betContainer}>
      <Text style={styles.betText}>Bet</Text>
      <Text style={styles.moneyText}>10.00</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  betContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  betText: {
    fontSize: 12,
    fontWeight: "400",
  },
  moneyText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.DarkRoyalPurple,
    borderTopWidth: 1,
    borderColor: Colors.SunsetOrange,
  },
});

export default Bet;
