import { StyleSheet, Text, View } from "react-native";

const MealsOverview: React.FC = ({ categoryId }) => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview {categoryId}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MealsOverview;
