import { StyleSheet, Text } from "react-native";

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
    color: "#e3ba81",
  },
});
export default Title;
