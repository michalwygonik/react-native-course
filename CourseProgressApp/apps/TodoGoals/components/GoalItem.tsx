import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

export type GoalItemProps = {
  id: string;
  content: string;
  onDelete: (id: string) => void;
};

const GoalItem: React.FC<GoalItemProps> = ({ id, content, onDelete }) => {
  return (
    <View style={styles.goalItemContainer}>
      <TouchableNativeFeedback
        onPress={() => onDelete(id)}
        background={TouchableNativeFeedback.Ripple("#ccc", false)}
      >
        <View style={styles.goalItemContent}>
          <Text style={styles.goalItemText}>{content}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    borderRadius: 10,
    marginBottom: 8,
    overflow: "hidden",
  },
  goalItemContent: {
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  goalItemText: {
    padding: 6,
  },
});
export default GoalItem;
