const FETCH_COCKTAILS = "FETCH_COCKTAILS";
const CREATE_COCKTAIL = "CREATE_COCKTAIL";

export const fetchCocktails = async (dispatch) => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    dispatch({
      type: FETCH_COCKTAILS,
      payload: data,
    });
  } catch (err) {
    console.log(`Whoops!! Something wrong happened: ${err}`);
  }
};

export const createCocktail = (cocktail) => {
  return (dispatch) => {
    try {
      dispatch({
        type: CREATE_COCKTAIL,
        payload: cocktail,
      });
    } catch (err) {
      console.log(`Whoops!! Something wrong happened: ${err}`);
    }
  };
};
