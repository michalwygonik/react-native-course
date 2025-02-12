import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

const IconButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
