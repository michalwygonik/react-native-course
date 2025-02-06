import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Symbol: React.FC<{
  symbol: { name: string; imagePath: string; multiplier: number };
}> = ({ symbol }) => {
  return (
    <View style={[styles.symbol, { backgroundColor: symbol.name }]}>
      <Text>multiplier: {symbol.multiplier}</Text>

      <Text>imagePath: {symbol.imagePath}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  symbol: {
    width: 100,
    minHeight: "30%",
    marginVertical: 2,
  },
});

export default Symbol;
