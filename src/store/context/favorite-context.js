import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  id: [],
  addFavorite: (id) => {},
  remvoeFavorite: (id) => {},
});

export default function FavoriteContextProvided({ children }) {
  const [favoriteMealsIds, setFavorite] = useState([]);

  function addFavoriteMeal(id) {
    setFavorite((current) => [...current, id]);
  }

  function removeFavoriteMeal(id) {
    setFavorite((current) => current.filter((mealId) => mealId !== id));
  }

  const value = {
    id: favoriteMealsIds,
    addFavorite: addFavoriteMeal,
    remvoeFavorite: removeFavoriteMeal,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
