import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createCocktail } from "../store/actions";

const singleCocktailArrayState = (state) => state.singleCocktailCollection; // Retrieve single cocktails state
const Cocktail = () => {

  const singleCocktailArray = useSelector(
    singleCocktailArrayState
  ).cocktailsArray;
  const currentCocktail = useSelector(singleCocktailArrayState).currentCocktail;
  // const cocktailName = currentCocktail.strDrink;
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
    dispatch(createCocktail(cocktailName));
  }, []);

  return (
    <div>
      <h1>Cocktail: {cocktailName}</h1>
      <Link to={"/cocktailDetails"}>/cocktailDetails</Link>
    </div>
  );
};

export default Cocktail;
