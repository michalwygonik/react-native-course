import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type DataProps = {
  id: string;
  content: string;
};

const GoalItem: React.FC<{ item: DataProps }> = ({ item }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Text>{item.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    backgroundColor: "lightgray",
    padding: 6,
    marginBottom: 8,
    borderRadius: 10,
  },
});
export default GoalItem;
