import { Pressable, StyleSheet, Text, View } from "react-native";

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({
  title,
  color,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        [styles.gridItem, { backgroundColor: color }],
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.95 }],
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
  },
});

export default CategoryGridTile;
