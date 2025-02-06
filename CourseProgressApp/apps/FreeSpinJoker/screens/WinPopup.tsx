import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Colors from "../utils/colors";

interface WinPopupProps {
  modalVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const WinPopup: React.FC<WinPopupProps> = ({
  modalVisible,
  setVisible,
  message,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => setVisible(false)} // Close on back press
    >
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <ImageBackground
              source={require("../assets/images/background.jpg")}
              resizeMode="contain"
            >
              <View style={styles.modalContent}>
                <Text style={styles.winText}>WIN</Text>
                {/* <Image
                source={require("../assets/images/symbols/oczykobry.png")}
                style={styles.winImage}
              /> */}
                <Text style={styles.winAmount}>{message}</Text>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(83, 38, 17, 0.42)", // Dark background with transparency
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    height: 180,
  },
  winImage: {
    resizeMode: "cover",
  },
  winText: {
    fontSize: 48,

    fontWeight: "bold",
    textShadowColor: Colors.LemonBurst,
    textShadowRadius: 12,
    color: Colors.SunsetOrange,
  },
  winAmount: {
    fontSize: 64,
    fontWeight: "900",
    color: Colors.GoldYellow,
    textShadowColor: Colors.SunsetOrange,
    textShadowRadius: 24,
  },
});
export default WinPopup;
