import { Pressable, Text, View } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({
  title,
  color,
}) => {
  return (
    <View>
      <Pressable>
        <View style={{ backgroundColor: color, margin: 5, padding: 5 }}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
