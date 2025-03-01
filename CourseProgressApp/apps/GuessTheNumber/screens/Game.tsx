import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../utils/colors";
import { FontAwesome } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

interface GameProps {
  userNumber: number;
  handleGameOver: () => void;
  setRoundsNumber: React.Dispatch<React.SetStateAction<number>>;
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

const Game: React.FC<GameProps> = ({
  userNumber,
  handleGameOver,
  setRoundsNumber,
}) => {
  const initialGuess = generateRandomNumber(1, 99, userNumber);
  const [randomNumber, setRandomNumber] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (userNumber === randomNumber) {
      handleGameOver();
      minValue = 1;
      maxValue = 99;
    }
  }, [randomNumber, userNumber, handleGameOver]);

  const handleNextGuess = (
    direction: string,
    randomNumber: number,
    userNumber: number,
    setRandomNumber: React.Dispatch<React.SetStateAction<number>>,
    setGuessRounds: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    if (direction === "lower") {
      if (randomNumber > userNumber) {
        maxValue = randomNumber - 1;

        const random = generateRandomNumber(minValue, maxValue, randomNumber);

        setRandomNumber(random);
        setGuessRounds((prevGuessRounds) => [random, ...prevGuessRounds]);
      } else {
        Alert.alert("Are you sure?", "Your number is greater");
      }
    } else if (direction === "greater") {
      if (randomNumber < userNumber) {
        minValue = randomNumber + 1;

        const random = generateRandomNumber(minValue, maxValue, randomNumber);
        setRandomNumber(random);
        setGuessRounds((prevGuessRounds) => [random, ...prevGuessRounds]);
      } else {
        Alert.alert("Are you sure?", "Your number is lower");
      }
    }
    console.log("min: " + minValue + ", max: " + maxValue);
    setRoundsNumber(guessRounds.length + 1);
  };

  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />

      <NumberContainer randomNumber={randomNumber} />
      <View>
        <Text style={styles.buttonsTitle}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title={
              <FontAwesome name="plus" size={18} color={Colors.accent500} />
            }
            background="white"
            color="black"
            onPress={() =>
              handleNextGuess(
                "greater",
                randomNumber,
                userNumber,
                setRandomNumber,
                setGuessRounds
              )
            }
          />
          <PrimaryButton
            title={
              <FontAwesome name="minus" size={18} color={Colors.accent500} />
            }
            background="white"
            color="black"
            onPress={() =>
              handleNextGuess(
                "lower",
                randomNumber,
                userNumber,
                setRandomNumber,
                setGuessRounds
              )
            }
          />
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRounds.length - itemData.index}
                guess={itemData.item}
              />
            )}
          />
        }
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
    marginTop: 12,
  },
  itemsContainer: {
    flex: 1,
  },
});

export default Game;
