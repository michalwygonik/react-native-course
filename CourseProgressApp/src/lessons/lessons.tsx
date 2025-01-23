import { FlatList, StyleSheet, Text, View } from "react-native";

export type LessonListProps = {
  courseGoals: { id: string; content: string }[];
};

const LessonsList: React.FC<LessonListProps> = ({ courseGoals }) => {
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
        renderItem={({ item }) => (
          <View style={styles.textItemContainer}>
            <Text>{item.content}</Text>
          </View>
        )}
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
  textItemContainer: {
    backgroundColor: "lightgray",
    padding: 6,
    marginBottom: 8,
    borderRadius: 10,
  },
});

export default LessonsList;
