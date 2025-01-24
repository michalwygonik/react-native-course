import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export type GoalItemProps = {
  id: string;
  content: string;
  onDelete: (id: string) => void;
};

const GoalItem: React.FC<GoalItemProps> = ({ id, content, onDelete }) => {
  return (
    <Pressable onPress={() => onDelete(id)}>
      <View style={styles.goalItemContainer}>
        <Text>{content}</Text>
      </View>
    </Pressable>
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
