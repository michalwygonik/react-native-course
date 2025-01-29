import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    margin: 5,
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    color: Colors.primary400,
  },
});
export default Title;
