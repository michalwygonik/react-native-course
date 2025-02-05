import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface BetValueButtonProps {
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
}

const BetValueButton: React.FC<BetValueButtonProps> = ({
  onPress,
  iconName,
  iconSize = 24,
  iconColor = "black",
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    backgroundColor: Colors.SpinButtonVibrantOrange,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BetValueButton;
