import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Recipe from "./components/Recipe";
import Form from "./components/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const APP_ID = "8e7c0c48";
  const APP_KEY = "a2be49acfa8d7bb350167b1b348b6f79";
  //   const search_term = "burger";
  const [search, setSearch] = useState("Burger");
  const [query, setQuery] = useState("Pasta");
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState(
    "https://i.ibb.co/1dx92pH/burgerload.gif"
  );

  const url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    query +
    "&app_id=" +
    APP_ID +
    "&app_key=" +
    APP_KEY;

  useEffect(() => {
    getResponse();
  }, [query]);

  const getResponse = async () => {
    setImage(
      "https://i.ibb.co/1dx92pH/burgerload.gif"
    );

    const response = await fetch(url);
    
    const data = await response.json();
    setImage(
        "https://i.ibb.co/1dx92pH/burgerload.gif"
      );
    setRecipes(data.hits);
    setImage("");
    if (data.hits.length === 0) {
      setImage("https://i.ibb.co/3c65f5W/404-unscreen.gif");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setQuery(search);
  };
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    const searched = e.target.value;
    setSearch(searched);
  };
  console.log(recipes);
  return (
    <div>
      <Form onFormSubmit={submitHandler} onInputChange={inputChangeHandler} />
      <div className={style.recipesbox}>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredientsArray={recipe.recipe.ingredientLines}
            all={recipe.recipe}
          />
        ))}
        <img className={style.loading} src={image} alt=""></img>     {/*LOADING IMAGE*/}
      </div>
    </div>
   
  );
};
export default App;
