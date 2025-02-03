import { useEffect, useState } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
const reelSymbols = ["red", "blue", "green", "yellow", "purple"];
const Reel: React.FC = () => {
  const [spinValue] = useState(new Animated.Value(0));
  const [currentSymbols, setCurrentSymbols] = useState<string[]>([]);

  // Set random symbols for the reel
  const generateSymbols = () => {
    const newSymbols = [
      reelSymbols[Math.floor(Math.random() * reelSymbols.length)],
      reelSymbols[Math.floor(Math.random() * reelSymbols.length)],
      reelSymbols[Math.floor(Math.random() * reelSymbols.length)],
    ];
    setCurrentSymbols(newSymbols);
  };

  useEffect(() => {
    generateSymbols(); // Initialize with random symbols
  }, []);

  return (
    <View style={styles.reelContainer}>
      {currentSymbols.map((symbol, index) => (
        <Animated.View
          key={index}
          style={[
            styles.symbol,
            {
              backgroundColor: symbol,
              transform: [
                {
                  translateY: spinValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -300], // Make symbols "move" during the spin
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  reelContainer: {
    width: "30%",
    height: "100%",
    margin: 10,
    overflow: "hidden",
  },
  symbol: {
    width: "100%",
    height: "29%",
    borderWidth: 1,
    margin: 5,
  },
});

export default Reel;
