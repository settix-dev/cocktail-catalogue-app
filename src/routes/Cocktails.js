import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/filters/CategoryFilter";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions/cocktailsApiActions";

const cocktailsState = (state) => state.cocktailsCollection; // Retrieve cocktails state from redux store
const Cocktails = () => {
  const cocktails = useSelector(cocktailsState).cocktails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  console.log(cocktails);
  return (
    <div>
      <h1>Cocktails</h1>
      <CategoryFilter />
      {cocktails.map((cocktail, index) => (
        <div key={index}>
          {cocktail.drinks.map((drink, index) => (
            <div key={index}>
              {drink.idDrink}: {drink.strGlass}, {drink.strDrinkThumb}
            </div>
          ))}
        </div>
      ))}
      <Link to={"/cocktail"}>/cocktail</Link>
    </div>
  );
};

export default Cocktails;
