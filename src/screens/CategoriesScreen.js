import { FlatList } from "react-native";

import { CATEGORIES } from "../assets/DUMMY_DATA";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}