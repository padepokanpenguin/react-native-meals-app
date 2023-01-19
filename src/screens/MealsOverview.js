import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../assets/DUMMY_DATA";
import MealList from "../components/MealList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute();

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}
