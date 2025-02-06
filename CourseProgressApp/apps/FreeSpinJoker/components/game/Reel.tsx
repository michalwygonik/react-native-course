import React from "react";
import { View, StyleSheet } from "react-native";
import Symbol from "./Symbol";

interface Symbol {
  name: string;
  imagePath: string;
  multiplier: number;
}

interface ReelProps {
  symbols: Symbol[];
}

const Reel: React.FC<ReelProps> = ({ symbols }) => {
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

/* 


AS IT WAS:



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

*/

/*  const Reel = ({ symbols }: { symbols: string[] }) => {
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));
  const [currentSymbolIndex, setCurrentSymbolIndex] = useState<number[]>([0, 0, 0]); // Indexes for 3 reels
  
  // Function to handle the spinning effect
  const startSpin = () => {
    // Spin duration and speed settings
    const spinDuration = 2000; // Spin for 2 seconds

    // Animate the reels (loop through each symbol)
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: spinDuration,
        easing: Easing.linear,  // Smooth, continuous animation
        useNativeDriver: true,
      })
    ).start();
  };

  // Generate symbols dynamically
  const getSpinSymbol = (index: number) => {
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    return symbols[symbolIndex];
  };

  // Show symbol array for animation
  useEffect(() => {
    // Update the current symbol index after the spin
    const updatedSymbols = symbols.map(getSpinSymbol);
    setCurrentSymbolIndex(updatedSymbols);
  }, [spinValue]); 

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      {currentSymbolIndex.map((symbol, index) => (
        <Animated.View
          key={index}
          style={{
            transform: [{
              translateY: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300],  // Move the symbols up/down
              })
            }]
          }}>
          <Image source={symbol} style={{ width: 100, height: 100 }} />
        </Animated.View>
      ))}
      <Button title="Spin" onPress={startSpin} />
    </View>
  );
};
*/
