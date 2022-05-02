const FETCH_COCKTAILS = "FETCH_COCKTAILS";

export const fetchCocktails = (cocktails) => {
  return async (dispatch) => {
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
};
