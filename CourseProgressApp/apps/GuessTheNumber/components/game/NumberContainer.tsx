import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

interface NumberContainerProps {
  randomNumber: number | null;
}

const NumberContainer: React.FC<NumberContainerProps> = ({ randomNumber }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.text}>{randomNumber}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    margin: 50,
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 5,
    padding: deviceWidth < 380 ? 16 : 20,
  },
  text: {
    fontSize: 22,
    color: Colors.primary400,
    fontWeight: 700,
    textAlign: "center",
  },
});
export default NumberContainer;
