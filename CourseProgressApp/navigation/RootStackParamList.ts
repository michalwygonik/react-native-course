export type RootStackParamList = {
  Home: undefined;
  TodoGoals: undefined;
  GuessTheNumber: undefined;
  FreeSpinJoker: undefined;
  //Meals APP
  Meals: undefined;
  Categories: undefined;
  Favorites: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};
