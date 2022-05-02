import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/filters/CategoryFilter";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions/cocktailsApiActions";
import { changeFilterCategory } from "../store/actions/filtersActions";

const cocktailsState = (state) => state.cocktailsCollection; // Retrieve cocktails state from redux store
const categoryFilterState = (state) => state.categoryFilterState;
const Cocktails = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const cocktails = useSelector(cocktailsState).cocktails;
  const dispatch = useDispatch();
  const currentCategoryFilter = useSelector(categoryFilterState);
  console.log(currentCategoryFilter);

  const handleChangeFilter = (e) => {
    console.log(`Category filter: ${e.target.value}`);
    setCategoryFilter(e.target.value === "All" ? "" : e.target.value);
  };
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    dispatch(changeFilterCategory(categoryFilter));
  }, [dispatch, categoryFilter]);

  console.log(cocktails);
  return (
    <div>
      <h1>Cocktails</h1>
      <CategoryFilter
        categoryFilter={categoryFilter}
        handleChangeFilter={handleChangeFilter}
      />
      {categoryFilter === ""
        ? cocktails.map((cocktail, index) => (
            <div key={index}>
              {cocktail.drinks.map((drink, index) => (
                <div key={index}>
                  {drink.idDrink}: {drink.strGlass}, {drink.strDrinkThumb},{" "}
                  {drink.strCategory}
                </div>
              ))}
            </div>
          ))
        : cocktails.map((cocktail, index) => (
            <div key={index}>
              {cocktail.drinks
                .filter((drink, index) => drink.strCategory === categoryFilter)
                .map((drink, index) => (
                  <div key={index}>
                    {drink.idDrink}: {drink.strGlass}, {drink.strDrinkThumb},{" "}
                    {drink.strCategory}
                  </div>
                ))}
            </div>
          ))}

      <Link to={"/cocktail"}>/cocktail</Link>
    </div>
  );
};

export default Cocktails;
