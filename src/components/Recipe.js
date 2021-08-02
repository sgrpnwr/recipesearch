import React from "react";
import style from "./Recipe.module.css";
const Recipe = (props) => {
  const [hide, setHide] = React.useState("");
  const [showIngredients, setshowIngredients] = React.useState();
  const [hideIngredients, sethideIngredients] = React.useState(style.hideIngredients);

  const showRecipe = () => {
    console.log(props.all);
    setHide(style.hide);
    setshowIngredients(style.showIngredients);
    sethideIngredients();
  };
  const abc = () => {
    sethideIngredients(style.hideIngredients);
    setshowIngredients();
    setHide();
  };
  return (
    <div className={style.recipe}>
      <div className={`${style.imagediv} ${hide}`}>
        <img className={style.foodimg} src={props.image} alt=""></img>
        <button onClick={showRecipe} className={style.btn}>
          See Ingredients
        </button>
      </div>
      <div className={`${style.info} ${hide}`}>
        <h1>{props.title}</h1>
      </div>
      <div
        className={`${style.ingredients} ${hideIngredients} ${showIngredients} `}
      >
        <ul>
          {props.ingredientsArray.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <button className={style.btn} onClick={abc}>
          Cancel
        </button>
        <button className={style.btn}>
          <a href={props.all.url}>See Recipe with instructions</a>
        </button>
      </div>
    </div>
  );
};
export default Recipe;
