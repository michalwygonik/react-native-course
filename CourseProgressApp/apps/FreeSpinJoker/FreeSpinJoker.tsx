import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import Orientation from "react-native-orientation-locker";

import * as ScreenOrientation from "expo-screen-orientation";

const FreeSpinJoker: React.FC = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <View>
      <Text>FreeSpinJoker 🃏</Text>
    </View>
  );
};

export default FreeSpinJoker;
