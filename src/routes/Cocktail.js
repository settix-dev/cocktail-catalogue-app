import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createCocktail } from "../store/actions";

const singleCocktailArrayState = (state) => state.singleCocktailCollection; // Retrieve single cocktails state
const cocktailsState = (state) => state.cocktailsCollection; // Retrieve cocktails state from redux store
const Cocktail = () => {
  const singleCocktailArray = useSelector(
    singleCocktailArrayState
  ).cocktailsArray;
  const currentCocktail = useSelector(singleCocktailArrayState).currentCocktail;
  const cocktails = useSelector(cocktailsState).cocktails;
  console.log(cocktails);
  const dispatch = useDispatch();
  console.log(singleCocktailArray);
  console.log(currentCocktail);
  console.log(currentCocktail.strDrink);

  // Get current cocktail from cocktails page
  let cocktailName = window.location.pathname;
  console.log(cocktailName);
  cocktailName = cocktailName.split("/");
  cocktailName = cocktailName[cocktailName.length - 1];
  console.log(`path name: ${window.location.pathname}`);

  // Create a cocktail
  useEffect(() => {
    if (currentCocktail !== cocktailName) {
      dispatch(createCocktail(cocktailName));
    }
  }, []);

  return (
    <div className="cocktail-drink">
      <h3 className="h3 p-3 text-muted fst-italic">{cocktailName}</h3>
      {cocktails.map((cocktail, index) => (
        <div
          key={index}
          className=" d-flex align-item-center justify-content-center"
        >
          {cocktail.drinks.map((drink, index) => (
            <div className="" key={index}>
              {drink.strDrink === cocktailName ? (
                <div className="card w-100 cocktail-card">
                  <img
                    src={drink.strDrinkThumb}
                    className="card-img-top"
                    alt="Cocktail Thumb"
                  />
                  <div className="card-body">
                    <h3>Cocktail Details</h3>
                    <ul>
                      <li>Drink Name: {drink.strDrink}</li>
                      <li>Glass Type: {drink.strGlass}</li>
                      <li>Ingredient 1: {drink.strIngredient1}</li>
                      <li>Ingredient 2: {drink.strIngredient2}</li>
                      <li>Ingredient 3: {drink.strIngredient3}</li>
                      <li>Ingredient 4: {drink.strIngredient4}</li>
                      <li>Measure 1: {drink.strMeasure1}</li>
                      <li>Measure 2: {drink.strMeasure2}</li>
                      <li>Measure 3: {drink.strMeasure3}</li>
                      <li>Measure 4: {drink.strMeasure4}</li>
                    </ul>
                    <p>
                      For more details visit
                      <Link
                        to={`/cocktailDetails/${cocktailName}`}
                      >{`${cocktailName}Details`}</Link>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cocktail;
