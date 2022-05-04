const initialState = {
  cocktailsArray: [],
  currentCocktail: "",
};

const cocktailApiReducer = (state = initialState, action) => {
  console.log(`cocktail array initial state: ${state}`)
  switch (action.type) {
    case "CREATE_COCKTAIL":
      return {
        ...state,
        cocktailsArray: [...state.cocktailsArray].concat(action.payload),
        currentCocktail: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailApiReducer;
