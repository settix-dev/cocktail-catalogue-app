import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CocktailFilters from "../components/filters/CocktailFilters";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions/cocktailsApiActions";
import loader from "../assets/loading-loader.gif";
import {
  changeFilterCategory,
  changeFilterGlass,
  changeFilterAlcohol,
} from "../store/actions/filtersActions";

const cocktailsState = (state) => state.cocktailsCollection; // Retrieve cocktails state from redux store
const categoryFilterState = (state) => state.categoryFilterState; // Retrieve Categery filter state from store
const singleCocktailArrayState = (state) => state.singleCocktailCollection; // Retrieve single cocktails state
const Cocktails = () => {
  const [categoryFilter, setCategoryFilter] = useState("Ordinary Drink");
  const [glassFilter, setGlassFilter] = useState("Highball glass");
  const [alcoholFilter, setAlcoholFilter] = useState("Alcoholic");
  const [drinkFilter, setDrinkFilter] = useState("All"); // Tracks the current filter
  const cocktails = useSelector(cocktailsState).cocktails;
  const dispatch = useDispatch();
  const currentCategoryFilter = useSelector(categoryFilterState).drinkCategory;
  const currentGlassFilter = useSelector(categoryFilterState).drinkGlass;
  const currentAlcoholFilter = useSelector(categoryFilterState).drinkAlcohol;
  console.log(currentAlcoholFilter);
  console.log(currentCategoryFilter);
  console.log(currentGlassFilter);
  const singleCocktailArray = useSelector(singleCocktailArrayState);
  console.log(singleCocktailArray);

  const handleCategoryChangeFilter = (e) => {
    console.log(`Category filter: ${e.target.value}`);
    setCategoryFilter(e.target.value);
  };

  const handleGlassChangeFilter = (e) => {
    console.log(`Glass Filter: ${e.target.value}`);
    setGlassFilter(e.target.value);
  };

  const handleAlcoholChangeFilter = (e) => {
    console.log(`Alcohol Filter: ${e.target.value}`);
    setAlcoholFilter(e.target.value);
  };

  const handleDrinkFilterChange = (e) => {
    setDrinkFilter(e.target.value);
  }

  useEffect(() => {
    if (cocktails.length === 0) {
      // dispatch(fetchCocktails());
      fetchCocktails(dispatch);
    }
  }, []);

  useEffect(() => {
    dispatch(changeFilterGlass(glassFilter));
  }, [dispatch, glassFilter]);

  useEffect(() => {
    dispatch(changeFilterCategory(categoryFilter));
  }, [dispatch, categoryFilter]);

  useEffect(() => {
    dispatch(changeFilterAlcohol(alcoholFilter));
  }, [dispatch, alcoholFilter]);

  console.log(cocktails);
  return (
    <div>
      <h1>Cocktails</h1>
      <p>Please select a cocktail</p>
      <select onChange={handleDrinkFilterChange}>
        <option value="All">All</option>
        <option value="Filter">Drink Filters</option>
      </select>
      {drinkFilter !== "All" && 
      <CocktailFilters
        categoryFilter={categoryFilter}
        glassFilter={glassFilter}
        alcoholFilter={alcoholFilter}
        handleAlcoholChangeFilter={handleAlcoholChangeFilter}
        handleCategoryChangeFilter={handleCategoryChangeFilter}
        handleGlassChangeFilter={handleGlassChangeFilter}
      />}
      {cocktails.length !== 0 ? (
        cocktails.map((cocktail, index) => (
          <div key={index}>
            {(drinkFilter === "All" ? cocktail.drinks : cocktail.drinks
              .filter(
                (drink) =>
                  alcoholFilter === drink.strAlcoholic &&
                  glassFilter === drink.strGlass &&
                  categoryFilter === drink.strCategory
              ))
              .map((drink, index) => (
                <div key={index}>
                  {drink.idDrink}: {drink.strGlass}, {drink.strDrinkThumb},{" "}
                  <img src={`${drink.strDrinkThumb}`} alt="Cocktail Thumb" />
                  <Link to={`/cocktail/${drink.strDrink}`}>{drink.strDrink}</Link>
                </div>
              ))}
          </div>
        ))
      ) : (
        <div>
          <img src={loader} alt="Loading" />
        </div>
      )}
      {}
    </div>
  );
};

export default Cocktails;
