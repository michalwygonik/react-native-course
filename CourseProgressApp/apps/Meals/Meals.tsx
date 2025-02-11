import { Button, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../constant/ScreenName";

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.Meals>;

const Meals: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#1F1F1F" }}>
      <Button
        title="Show meal categories"
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default Meals;
