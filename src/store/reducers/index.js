import { combineReducers } from "redux";
import cocktailsApiReducer from "../reducers/cocktailsApiReducer";
import categoryFilterReducer from "./categoryFilterReducer";
import cocktailApiReducer from "./cocktailApiReducer";

const rootReducer = combineReducers({
  cocktailsCollection: cocktailsApiReducer,
  categoryFilterState: categoryFilterReducer,
  singleCocktailCollection: cocktailApiReducer,
});

export default rootReducer;
