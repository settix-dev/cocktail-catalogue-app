import React from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/filters/CategoryFilter";

const Cocktails = () => {
  return (
    <div>
      <h1>Cocktails</h1>
      <CategoryFilter />
      <Link to={"/cocktail"}>/cocktail</Link>
    </div>
  );
};

export default Cocktails;
