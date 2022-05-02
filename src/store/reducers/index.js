import { combineReducers } from "redux";
import cocktailsApiReducer from "../reducers/cocktailsApiReducer";
import categoryFilterReducer from "./categoryFilterReducer";

const rootReducer = combineReducers({
  cocktailsCollection: cocktailsApiReducer,
  categoryFilterState: categoryFilterReducer,
});

export default rootReducer;
