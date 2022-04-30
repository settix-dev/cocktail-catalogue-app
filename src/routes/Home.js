import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to our Cocktail Catalogue. Please head over to
        <Link to={"/cocktails"}>/cocktails</Link> to see our Cocktails.
      </p>
    </div>
  );
};

export default Home;
