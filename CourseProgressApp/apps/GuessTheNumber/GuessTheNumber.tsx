import { StyleSheet, Text, View } from "react-native";
import StartGame from "./screens/StartGame";

const GuessTheNumber: React.FC = () => {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });

export default GuessTheNumber;
