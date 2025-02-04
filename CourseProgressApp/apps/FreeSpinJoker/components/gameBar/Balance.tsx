import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../utils/colors";

const Balance: React.FC = () => {
  return (
    <View style={styles.balanceContainer}>
      <Ionicons name="cash-outline" size={16} color="black" />
      <Text style={styles.balanceText}>Balance</Text>
      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>2000.00</Text>
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
