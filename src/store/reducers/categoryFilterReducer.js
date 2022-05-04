const initialState = {
  drinkCategory: "",
  drinkGlass: "",
  drinkAlcohol: "",
};

const categoryFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY_CHANGE_FILTER":
      return { ...state.drinkCategory, drinkCategory: action.payload };
    case "GLASS_CHANGE_FILTER":
      return { ...state.drinkGlass, drinkGlass: action.payload };
    case "ALCOHOL_CHANGE_FILTER":
      return { ...state.drinkAlcohol, drinkAlcohol: action.payload };
    default:
      return state;
  }
};

export default categoryFilterReducer;
