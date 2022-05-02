const initialState = {
  cocktails: [],
};

const cocktailsApiReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "FETCH_COCKTAILS":
      console.log(state);
      return { ...state, cocktails: [action.payload] };
    default:
      return state;
  }
};

export default cocktailsApiReducer;
