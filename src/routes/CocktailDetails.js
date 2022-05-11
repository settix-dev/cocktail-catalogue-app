import React from "react";
import { useSelector } from "react-redux";

const cocktailsState = (state) => state.cocktailsCollection; // Retrieve cocktails state from redux store

const CocktailDetails = () => {
  const cocktails = useSelector(cocktailsState).cocktails;
  // Get current cocktail from cocktail page
  let cocktailName = window.location.pathname;
  console.log(cocktailName);
  cocktailName = cocktailName.split("/");
  cocktailName = cocktailName[cocktailName.length - 1];
  console.log(cocktailName);
  return (
    <div>
      <h1>{`${cocktailName} Details`}</h1>
      {cocktails.map((cocktail, index) => (
        <div key={index}>
          {cocktail.drinks.map((drink, index) => (
            <div key={index}>
              {drink.strDrink === cocktailName ? <ul>
              <li>Instructions: {drink.strInstructions}</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              </ul> : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CocktailDetails;
