import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";

interface GameProps {
  userNumber: number;
}

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNumber === exclude);
  return randomNumber;
};

const Game: React.FC<GameProps> = ({ userNumber }) => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    const initialGuess = generateRandomNumber(1, 99, userNumber);
    setRandomNumber(initialGuess);
  }, [userNumber]);

  return (
    <View style={styles.screen}>
      <Title title="Oponent's Guess" />
      <Text>{userNumber}</Text>

      <NumberContainer randomNumber={randomNumber} />
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="+"
            background="white"
            color="black"
            onPress={() => null}
          />
          <PrimaryButton
            title="-"
            background="white"
            color="black"
            onPress={() => null}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 24,
    marginHorizontal: 12,
  },
});

export default Game;
