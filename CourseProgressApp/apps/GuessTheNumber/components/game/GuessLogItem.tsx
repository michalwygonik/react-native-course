import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: React.FC<GuessLogItemProps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.accent400,
    fontSize: 14,
    marginTop: 12,
    borderRadius: 12,
  },
  itemText: {
    color: Colors.text,
    fontWeight: "300",
  },
});

export default GuessLogItem;
