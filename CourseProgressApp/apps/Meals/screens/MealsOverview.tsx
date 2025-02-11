import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ScreenName } from "../../../constant/ScreenName";

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenName.MealsOverview
>;

const MealsOverview: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MealsOverview;
