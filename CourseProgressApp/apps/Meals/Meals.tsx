import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../constant/ScreenName";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.Meals>;

const Meals: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1F1F1F" }}>
      <Button
        title="Show meal categories"
        onPress={() => navigation.navigate(ScreenName.Categories)}
      />
    </View>
  );
};

export default Meals;
