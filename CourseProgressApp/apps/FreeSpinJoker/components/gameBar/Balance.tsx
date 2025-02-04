import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../utils/colors";

interface BalanceProps {
  credit: number;
}

const Balance: React.FC<BalanceProps> = ({ credit }) => {
  return (
    <View style={styles.balanceContainer}>
      <Ionicons name="cash-outline" size={16} color="black" />
      <Text style={styles.balanceText}>Credit</Text>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>{credit.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  balanceText: {
    fontSize: 12,
    fontWeight: "400",
  },
  moneyContainer: {
    borderLeftWidth: 1,
    borderColor: Colors.SunsetOrange,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  moneyText: { fontSize: 14, fontWeight: "500", color: Colors.DarkRoyalPurple },
});
export default Balance;
