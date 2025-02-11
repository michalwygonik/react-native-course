import { useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";

import LandingScreen from "./screens/LandingScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../constant/ScreenName";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.FreeSpinJoker
>;

const FreeSpinJoker: React.FC<Props> = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );

    StatusBar.setHidden(true, "fade");
    return () => {
      ScreenOrientation.unlockAsync();
      StatusBar.setHidden(false, "fade");
    };
  }, []);

  return (
    <LinearGradient
      colors={[Colors.DarkRoyalPurple, Colors.DeepNeonBlue]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView style={styles.rootContainer}>
          <LandingScreen />
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
