import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import TodoGoals from "../apps/TodoGoals/TodoGoals";
import GuessTheNumber from "../apps/GuessTheNumber/GuessTheNumber";
import FreeSpinJoker from "../apps/FreeSpinJoker/FreeSpinJoker";
import Meals from "../apps/Meals/Meals";
import { RootStackParamList } from "./RootStackParamList";
import { ScreenName } from "../constant/ScreenName";
import CategoriesScreen from "../apps/Meals/screens/CategoriesScreen";
import MealsOverview from "../apps/Meals/screens/MealsOverview";

const MainStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1F1F1F",
        },

        headerTintColor: "#f0f0f0",
        headerTitleStyle: {
          fontWeight: "100",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
      <Stack.Screen name={ScreenName.TodoGoals} component={TodoGoals} />
      <Stack.Screen
        name={ScreenName.GuessTheNumber}
        component={GuessTheNumber}
      />
      <Stack.Screen name={ScreenName.FreeSpinJoker} component={FreeSpinJoker} />
      <Stack.Screen name={ScreenName.Meals} component={Meals} />
      <Stack.Screen name={ScreenName.Categories} component={CategoriesScreen} />
      <Stack.Screen name={ScreenName.MealsOverview} component={MealsOverview} />
    </Stack.Navigator>
  );
};

export default MainStack;
