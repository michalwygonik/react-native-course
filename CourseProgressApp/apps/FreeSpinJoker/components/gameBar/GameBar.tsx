import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";
import SpinButton from "../ui/SpinButton";
import Balance from "./Balance";
import LastWin from "./LastWin";
import Bet from "./Bet";
import { LinearGradient } from "expo-linear-gradient";

interface GameBarProps {
  generateReels: () => void;
  credit: number;
  bet: number;
  winAmount: number;
  setBet: React.Dispatch<React.SetStateAction<number>>;
}
const GameBar: React.FC<GameBarProps> = ({
  generateReels,
  credit,
  bet,
  winAmount,
  setBet,
}) => {
  return (
    <LinearGradient
      colors={[Colors.PlayfulYellow, Colors.WarmGlowYellow]}
      style={styles.gradientSize}
    >
      <View style={styles.gameBarContainer}>
        <Balance credit={credit} />
        <LastWin winAmount={winAmount} />
        <Bet bet={bet} setBet={setBet} />
        <SpinButton onPress={generateReels} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gameBarContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.WarmGlowYellow,

    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "transparent",
  },
  gradientSize: {
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
export default GameBar;
