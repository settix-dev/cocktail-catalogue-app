const initialState = {
  drinkCategory: "",
};

const categoryFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_CHANGE":
      return { ...state, drinkCategory: action.payload };
    default:
      return state;
  }
};

export default categoryFilterReducer;
