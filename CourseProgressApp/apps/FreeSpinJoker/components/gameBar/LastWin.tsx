import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";
interface LastWinProps {
  winAmount: number;
}
const LastWin: React.FC<LastWinProps> = ({ winAmount }) => {
  return (
    <View style={styles.lastWinContainer}>
      <Text style={styles.lastWinText}>Last Win</Text>
      <Text style={styles.moneyText}>{winAmount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lastWinContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lastWinText: {
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

export default LastWin;
