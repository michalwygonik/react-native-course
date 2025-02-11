import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ScreenName } from "../../../constant/ScreenName";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealsOverview
>;

const MealsOverview: React.FC<Props> = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(data) => <MealItem data={data.item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MealsOverview;
