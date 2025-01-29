import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../utils/colors";

interface GameProps {
  userNumber: number;
  handleGameOver: () => void;
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

let minValue = 1,
  maxValue = 99;

const Game: React.FC<GameProps> = ({ userNumber, handleGameOver }) => {
  const initialGuess = generateRandomNumber(1, 99, userNumber);
  const [randomNumber, setRandomNumber] = useState<number>(initialGuess);

  useEffect(() => {
    if (userNumber === randomNumber) {
      handleGameOver();
    }
  }, [randomNumber, userNumber, handleGameOver]);

  const handleNextGuess = (
    direction: string,
    randomNumber: number,
    userNumber: number,
    setRandomNumber: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (direction === "lower") {
      if (randomNumber > userNumber) {
        maxValue = randomNumber;

        const random = generateRandomNumber(
          minValue + 1,
          maxValue - 1,
          randomNumber
        );

        setRandomNumber(random);
      } else {
        Alert.alert("Are you sure?", "Your number is greater");
      }
    } else if (direction === "greater") {
      if (randomNumber < userNumber) {
        minValue = randomNumber;

        const random = generateRandomNumber(
          minValue + 1,
          maxValue - 1,
          randomNumber
        );
        setRandomNumber(random);
      } else {
        Alert.alert("Are you sure?", "Your number is lower");
      }
    }
    console.log("min: " + minValue + ", max: " + maxValue);
  };

  return (
    <View style={styles.screen}>
      <Title title="Oponent's Guess" />
      <Text>{userNumber}</Text>

      <NumberContainer randomNumber={randomNumber} />
      <View>
        <Text style={styles.buttonsTitle}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="+"
            background="white"
            color="black"
            onPress={() =>
              handleNextGuess(
                "greater",
                randomNumber,
                userNumber,
                setRandomNumber
              )
            }
          />
          <PrimaryButton
            title="-"
            background="white"
            color="black"
            onPress={() =>
              handleNextGuess(
                "lower",
                randomNumber,
                userNumber,
                setRandomNumber
              )
            }
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
  buttonsTitle: {
    textAlign: "center",
    backgroundColor: Colors.primary500,
    padding: 20,
    margin: 15,
    borderRadius: 15,
    fontSize: 24,
    fontWeight: 600,
    color: Colors.text,
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
