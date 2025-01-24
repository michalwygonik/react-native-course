import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./GoalItem";

export type GoalListProps = {
  courseGoals: { id: string; content: string }[];
};

const GoalsList: React.FC<GoalListProps> = ({ courseGoals }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        alwaysBounceVertical={false}
        style={styles.flatListContainer}
        data={courseGoals}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View>
            <Text>No goals added yet!</Text>
          </View>
        }
        renderItem={({ item }) => <GoalItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 6,
    marginVertical: 12,
    padding: 12,
  },
  flatListContainer: {
    padding: 12,
  },
});

export default GoalsList;
