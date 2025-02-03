import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TodoGoals from "./apps/TodoGoals/TodoGoals";
import HomeScreen from "./HomeScreen";
import GuessTheNumber from "./apps/GuessTheNumber/GuessTheNumber";
import FreeSpinJoker from "./apps/FreeSpinJoker/FreeSpinJoker";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1F1F1F",
            height: 80,
          },

          headerTintColor: "#f0f0f0",
          headerTitleStyle: {
            fontWeight: "100",
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo Goals" component={TodoGoals} />
        <Stack.Screen name="Guess the Number" component={GuessTheNumber} />
        <Stack.Screen
          name="Free Spin Joker"
          component={FreeSpinJoker}
          options={{
            headerStyle: { height: 40, backgroundColor: "#1F1F1F" },
            headerTitleStyle: { fontSize: 16, fontWeight: "100" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
