import React from "react";
const drinksCategories = [
  "Ordinary Drink",
  "Cocktail",
  "Shake",
  "Other/Unknown",
  "Cocoa",
  "Shot",
  "Coffee / Tea",
  "Homemade Liqueur",
  "Punch / Party Drink",
  "Beer",
  "Soft Drink",
];
const CategoryFilter = ({categoryFilter, handleChangeFilter}) => {
  return (
    <div>
      <label>Category:</label>
      <select value={categoryFilter} onChange={(e) => handleChangeFilter(e)}>
        <option>All</option>
        {drinksCategories.map((drinkCategory, index) => (
          <option key={index}>{drinkCategory}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
