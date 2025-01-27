import { Text, View } from "react-native";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
export default PrimaryButton;
