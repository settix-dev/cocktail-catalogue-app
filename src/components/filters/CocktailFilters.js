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

const drinksGlasses = [
  "Highball glass",
  "Cocktail glass",
  "Old-fashioned glass",
  "Whiskey Glass",
  "Collins glass",
  "Pousse cafe glass",
  "Champagne flute",
  "Whiskey sour glass",
  "Cordial glass",
  "Brandy snifter",
  "White wine glass",
  "Nick and Nora Glass",
  "Hurricane glass",
  "Coffee mug",
  "Shot glass",
  "Jar",
  "Irish coffee cup",
  "Punch bowl",
  "Pitcher",
  "Pint glass",
  "Copper Mug",
  "Wine Glass",
  "Beer mug",
  "Margarita/Coupette glass",
  "Beer pilsner",
  "Beer Glass",
  "Parfait glass",
  "Mason jar",
  "Margarita glass",
  "Martini Glass",
  "Balloon Glass",
  "Coupe Glass",
];

const drinksAlcoholContent = ["Alcoholic", "Non alcoholic", "Optional alcohol"];

const CocktailFilters = ({
  categoryFilter,
  glassFilter,
  alcoholFilter,
  handleAlcoholChangeFilter,
  handleCategoryChangeFilter,
  handleGlassChangeFilter,
}) => {
  return (
    <div>
      <label>Category:</label>
      <select
        value={categoryFilter}
        onChange={(e) => handleCategoryChangeFilter(e)}
      >
        {drinksCategories.map((drinkCategory, index) => (
          <option key={index}>{drinkCategory}</option>
        ))}
      </select>
      <label>Glass:</label>
      <select value={glassFilter} onChange={(e) => handleGlassChangeFilter(e)}>
        {drinksGlasses.map((drinkGlass, index) => (
          <option key={index}>{drinkGlass}</option>
        ))}
      </select>
      <label>Alcoholic:</label>
      <select
        value={alcoholFilter}
        onChange={(e) => handleAlcoholChangeFilter(e)}
      >
        {drinksAlcoholContent.map((drinkAlcoholicContent, index) => (
          <option key={index}>{drinkAlcoholicContent}</option>
        ))}
      </select>
    </div>
  );
};

export default CocktailFilters;
