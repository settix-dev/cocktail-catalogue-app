import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './routes/Home';
import Cocktails from './routes/Cocktails';
import Cocktail from './routes/Cocktail';
import CocktailDetails from './routes/CocktailDetails';

function App() {
  return (
    <div className="App">
      <h1>Cocktail Catalogue</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/cocktails' element={<Cocktails />}></Route>
          <Route path='/cocktail' element={<Cocktail />}></Route>
          <Route path='/cocktailDetails' element={<CocktailDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
