import { useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import Game from "./components/Game";

const FreeSpinJoker: React.FC = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );

    StatusBar.setHidden(true);
    return () => {
      ScreenOrientation.unlockAsync();
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <LinearGradient
      colors={[Colors.DarkRoyalPurple, Colors.DeepNeonBlue]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        source={require("./images/background.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView>
          <Game />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
export default FreeSpinJoker;
