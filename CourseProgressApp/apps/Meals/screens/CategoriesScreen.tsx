import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen: React.FC = () => {
  const navigation = useNavigation();
  const renderCategoryItem = ({
    item,
  }: ListRenderItemInfo<{ id: string; title: string; color: string }>) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => navigation.navigate("Meals overview")}
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
