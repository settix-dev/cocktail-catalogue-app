import React from "react";
import { Link } from "react-router-dom";

const Cocktail = () => {
  return (
    <div>
      <h1>Cocktail</h1>
      <Link to={"/cocktailDetails"}>/cocktailDetails</Link>
    </div>
  );
};

export default Cocktail;
