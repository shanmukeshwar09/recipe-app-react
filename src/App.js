import React, { useEffect, useState } from "react";
import "./App.css";
import { Recipe } from "./Recipe";

const APP_ID = "229c712e";
const API_KEY = "ce4baaf6efdd2bb32996eda01e5e625e";

function App() {
  const [recipes, setRecipe] = useState([]);
  const [search, handleSearch] = useState("");
  const [query, handleQuery] = useState("banana");

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    ).then((response) => response.json().then((data) => setRecipe(data.hits)));
  };

  return (
    <>
      <form
        /*  onSubmit={(e) => {
          e.preventDefault();
          handleQuery(search);
        }} */
        className="input-form"
      >
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          onClick={(e) => {
            e.preventDefault();
            handleQuery(search);
          }}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </>
  );
}

export default App;
