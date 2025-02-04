import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

interface BetProps {
  bet: number;
}
const Bet: React.FC<BetProps> = ({ bet }) => {
  return (
    <View style={styles.betContainer}>
      <Text style={styles.betText}>Bet</Text>
      <Text style={styles.moneyText}>{bet.toFixed(2)}</Text>
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
