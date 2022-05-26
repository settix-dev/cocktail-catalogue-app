import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CocktailFilters from "../components/filters/CocktailFilters";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions/cocktailsApiActions";
import loader from "../assets/cocktail_v6zts3df.gif";
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
  };

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
    <div className="cocktails-main-dev">
      <h3 className="h3 p-3 text-muted fst-italic">Cocktails</h3>
      <div className="d-flex justify-content-center">
        <select
          className="form-select form-select-sm mb-3 text-secondary cocktail-select"
          onChange={handleDrinkFilterChange}
        >
          <option selected>Please select a cocktail</option>
          <option value="All">All</option>
          <option value="Filter">Drink Filters</option>
        </select>
      </div>
      {drinkFilter !== "All" && (
        <CocktailFilters
          categoryFilter={categoryFilter}
          glassFilter={glassFilter}
          alcoholFilter={alcoholFilter}
          handleAlcoholChangeFilter={handleAlcoholChangeFilter}
          handleCategoryChangeFilter={handleCategoryChangeFilter}
          handleGlassChangeFilter={handleGlassChangeFilter}
        />
      )}
      {cocktails.length !== 0 ? (
        cocktails.map((cocktail, index) => (
          <div
            key={index}
            className="d-flex flex-wrap gap-4 justify-content-center"
          >
            {(drinkFilter === "All"
              ? cocktail.drinks
              : cocktail.drinks.filter(
                  (drink) =>
                    alcoholFilter === drink.strAlcoholic &&
                    glassFilter === drink.strGlass &&
                    categoryFilter === drink.strCategory
                )
            ).map((drink, index) => (
              <Link to={`/cocktail/${drink.strDrink}`} className="w-25">
                <div key={index} className="w-100 cocktails-drinks">
                  <img
                    src={`${drink.strDrinkThumb}`}
                    className="card-img-top"
                    alt="Cocktail Thumb"
                  />
                  <div className="card-body">
                    <h5 className="card-title h5">{drink.strDrink}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img src={loader} alt="Loading" className="w-25" />
          <p>Loading...</p>
        </div>
      )}
      {}
    </div>
  );
};

export default Cocktails;
