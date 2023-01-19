import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsOverviewScreen from "./src/screens/MealsOverview";
import MealsDetailScreen from "./src/screens/MealsDetailScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import FavoriteContextProvided from "./src/store/context/favorite-context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerFunction() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerLabel: "Favourite Meals",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="star" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvided>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              cardStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerFunction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealsDetail"
              component={MealsDetailScreen}
              options={{ title: "About The Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvided>
    </>
  );
}

const styles = StyleSheet.create({});
