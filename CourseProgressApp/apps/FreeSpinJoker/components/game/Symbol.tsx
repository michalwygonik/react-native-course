import React from "react";
import { View, StyleSheet } from "react-native";

const Symbol: React.FC<{ symbol: string }> = ({ symbol }) => {
  return <View style={[styles.symbol, { backgroundColor: symbol }]}></View>;
};

const styles = StyleSheet.create({
  symbol: {
    width: 100,
    height: "30%",
    marginVertical: 2,
  },
});

export default Symbol;
