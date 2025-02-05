import React from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
            <View style={styles.modalContent}>
              <Text style={styles.winText}>{message}</Text>
              <Button title="Close" onPress={() => setVisible(false)} />
            </View>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background with transparency
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  winText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default WinPopup;
