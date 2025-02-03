import React from "react";
import { View, StyleSheet } from "react-native";
import Symbol from "./Symbol"; // Import Symbol component

// The Reel component is responsible for rendering a single column of symbols
const Reel: React.FC<{ symbols: string[] }> = ({ symbols }) => {
  return (
    <View style={styles.reelContainer}>
      {symbols.map((symbol, index) => (
        <Symbol key={index} symbol={symbol} />
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
