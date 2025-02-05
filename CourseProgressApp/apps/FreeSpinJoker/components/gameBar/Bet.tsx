import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";
import BetValueButton from "../ui/BetValueButton";
import { betValues } from "../betValues";

interface BetProps {
  bet: number;
  setBet: React.Dispatch<React.SetStateAction<number>>;
}

const handleBetIncrease = (
  currentBet: number,
  setBet: (bet: number) => void
) => {
  const nextBet = betValues.find((value) => value > currentBet);
  if (nextBet) setBet(nextBet);
};
const handleBetDecrease = (
  currentBet: number,
  setBet: (bet: number) => void
) => {
  const previousBet = [...betValues]
    .reverse()
    .find((value) => value < currentBet);
  if (previousBet) setBet(previousBet);
};
const Bet: React.FC<BetProps> = ({ bet, setBet }) => {
  return (
    <View style={styles.betContainer}>
      <BetValueButton
        iconName="remove"
        iconSize={24}
        onPress={() => handleBetDecrease(bet, setBet)}
      />
      <View style={styles.betTextContainer}>
        <Text style={styles.betText}>Bet</Text>
        <Text style={styles.moneyText}>{bet.toFixed(2)}</Text>
      </View>
      <BetValueButton
        iconName="add"
        iconSize={24}
        onPress={() => handleBetIncrease(bet, setBet)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  betContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  betTextContainer: {
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
