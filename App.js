import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import RecipesListScreen from "./src/components/RecipesEpic/RecipesListScreen";
import RecipesDetailsScreen from "./src/components/RecipesEpic/RecipeDetailsScreen";
import Screen from "./src/components/Screen";
import Title from "./src/components/Tiltle";
import Header from "./src/components/Header";


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header/>
        <Title /> 
        <Screen />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
});
