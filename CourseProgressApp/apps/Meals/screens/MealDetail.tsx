import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ScreenName } from "../../../constant/ScreenName";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.MealDetail>;

const MealDetail: React.FC<Props> = ({ route, navigation }) => {
  const { mealId } = route.params;

  const meal = MEALS.find((mealItem) => mealItem.id === mealId);

  const headerButtonPressed = () => {
    return console.log("press");
  };

  useLayoutEffect(() => {
    if (meal) {
      navigation.setOptions({
        title: meal.title,
        headerRight: () => <IconButton onPress={headerButtonPressed} />,
      });
    }
  }, [meal, navigation]);
  return (
    <ScrollView>
      <View style={styles.mealHeaderContainer}>
        <View>
          <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
          <Text style={styles.headerTitle}>{meal?.title}</Text>
        </View>

        <View style={styles.headerDetailsContainer}>
          <Text style={styles.headerDetailsText}>{meal?.duration} min</Text>

          <Text style={styles.headerDetailsText}>
            {meal?.complexity.toUpperCase()}
          </Text>

          <Text style={styles.headerDetailsText}>
            {meal?.affordability.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.mealDetailsContainer}>
        <View>
          <Text style={styles.detailsTitle}>Ingredients</Text>
          {meal?.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.detailsText}>
              ➡ {ingredient}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.detailsTitle}>Steps</Text>

          {meal?.steps.map((step, index) => (
            <Text key={index} style={styles.detailsText}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  mealHeaderContainer: {
    paddingBottom: 12,

    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  headerTitle: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    padding: 8,
  },
  headerDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 6,
  },
  headerDetailsText: {
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: 1,
  },
  mealDetailsContainer: {
    padding: 12,
    gap: 22,
    marginBottom: 12,
  },

  detailsTitle: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.2,
    textAlign: "center",
    paddingBottom: 12,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 0.1,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
});
