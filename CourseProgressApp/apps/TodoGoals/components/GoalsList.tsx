import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./GoalItem";

export type GoalListProps = {
  courseGoals: { id: string; content: string }[];
  onDeleteGoal: (id: string) => void;
};

const GoalsList: React.FC<GoalListProps> = ({ courseGoals, onDeleteGoal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        alwaysBounceVertical={false}
        style={styles.flatListContainer}
        data={courseGoals}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View>
            <Text style={styles.text}>No goals added yet!</Text>
          </View>
        }
        renderItem={({ item }) => (
          <GoalItem
            id={item.id}
            content={item.content}
            onDelete={onDeleteGoal}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 12,
    padding: 12,
    width: "100%",
  },
  flatListContainer: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: "#f0f0f0",
  },
});

export default GoalsList;
