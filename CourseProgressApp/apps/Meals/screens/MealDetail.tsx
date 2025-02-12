import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ScreenName } from "../../../constant/ScreenName";
import { MEALS } from "../data/dummy-data";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.MealDetail>;

const MealDetail: React.FC<Props> = ({ route, navigation }) => {
  const { mealId } = route.params;

  const meal = MEALS.find((mealItem) => mealItem.id === mealId);

  useLayoutEffect(() => {
    if (meal) {
      navigation.setOptions({ title: meal.title });
    }
  }, [meal, navigation]);
  return (
    <View>
      <Text>MealDetail</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({});
