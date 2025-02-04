import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SpinButtonProps {
  onPress: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        <Ionicons name="reload" size={38} color="black" />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: Colors.SpinButtonVibrantOrange,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    color: Colors.DarkPurple,
  },
});

export default SpinButton;
