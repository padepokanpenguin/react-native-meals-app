import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../assets/DUMMY_DATA";
import { StyleSheet, Text, View } from "react-native";

export default function FavouriteScreen() {
  const mealCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) => mealCtx.id.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
