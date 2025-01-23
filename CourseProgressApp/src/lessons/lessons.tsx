import { FlatList, StyleSheet, Text, View } from "react-native";

const LessonsList = () => {
  const lessons = [
    {
      id: 1,
      title: "intro",
    },
    {
      id: 2,
      title: "work",
    },
  ];
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.id}. {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
});

export default LessonsList;
