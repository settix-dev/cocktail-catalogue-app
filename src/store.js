import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../src/store/reducers/index";

// let middleWares = [thunk];
// const middleWare = applyMiddleware(...middleWares);

// export default configureStore(rootReducer, composeWithDevTools(middleWare));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
