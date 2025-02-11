import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import Meal from "../models/meal";

type MealItemProps = {
  data: Meal;
};

const MealItem: React.FC<MealItemProps> = ({ data }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.mealItem,
        pressed ? { transform: [{ scale: 0.97 }] } : null,
      ]}
    >
      <View>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
        <Text style={styles.mealTitle}>{data.title}</Text>
      </View>
      <View style={styles.mealDetailsContainer}>
        <Text style={styles.mealDetailsText}>{data.duration} min</Text>
        <Text style={styles.mealDetailsText}>
          {data.complexity.toUpperCase()}
        </Text>
        <Text style={styles.mealDetailsText}>
          {data.affordability.toUpperCase()}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fafafa",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  mealTitle: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    padding: 8,
  },
  mealDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 6,
  },
  mealDetailsText: {
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: 1,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default MealItem;
