import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ScreenName } from "../../../constant/ScreenName";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.Categories>;

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  //render a category tile
  const renderCategoryItem = ({
    item,
  }: ListRenderItemInfo<{ id: string; title: string; color: string }>) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() =>
          navigation.navigate(ScreenName.MealsOverview, { categoryId: item.id })
        }
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
