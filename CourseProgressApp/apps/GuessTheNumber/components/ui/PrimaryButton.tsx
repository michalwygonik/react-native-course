import { Pressable, StyleSheet, Text, View } from "react-native";

interface PrimaryButtonProps {
  title: React.ReactNode;
  onPress: () => void;
  background: string;
  color: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  background,
  color,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed
          ? [styles.button, styles.pressed, { backgroundColor: background }]
          : [styles.button, { backgroundColor: background }],
      ]}
    >
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    elevation: 2,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Slight offset
    shadowOpacity: 0.2, // Lower opacity for a lighter shadow
    shadowRadius: 1.5, // Smaller blur radius
  },
  buttonText: {
    fontSize: 18,
    paddingVertical: 2,
    paddingHorizontal: 6,
    textAlign: "center",

    fontWeight: 600,
  },
  pressed: {
    transform: [{ scale: 0.95 }], // Slight scale up for a "pressed" effect
    elevation: 6, // Raised elevation for a lifted look
    opacity: 0.9, // Slightly dim the color
    shadowColor: "#eb6b02", // Match shadow color to the button background
    shadowOffset: { width: 0, height: 2 }, // A slightly deeper shadow
    shadowOpacity: 0.4, // Make the shadow slightly more visible
    shadowRadius: 3, // Blur the shadow for a smooth effect
  },
});
export default PrimaryButton;
