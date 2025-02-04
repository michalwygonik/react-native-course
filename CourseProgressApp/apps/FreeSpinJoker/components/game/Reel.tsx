import React from "react";
import { View, StyleSheet } from "react-native";
import Symbol from "./Symbol"; // Import the Symbol component

interface Symbol {
  name: string;
  imagePath: string;
  multiplier: number;
}

interface ReelProps {
  symbols: Symbol[]; // Update the symbols prop to accept an array of objects
}

const Reel: React.FC<ReelProps> = ({ symbols }) => {
  return (
    <View style={styles.reelContainer}>
      {symbols.map((symbol, index) => (
        <Symbol key={index} symbol={symbol} /> // Pass the entire symbol object to the Symbol component
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reelContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
});

export default Reel;
