const CATEGORY_CHANGE_FILTER = "CATEGORY_CHANGE_FILTER";
const GLASS_CHANGE_FILTER = "GLASS_CHANGE_FILTER";
const ALCOHOL_CHANGE_FILTER = "ALCOHOL_CHANGE_FILTER";

export const changeFilterCategory = (categoryFilter) => {
  return {
    type: CATEGORY_CHANGE_FILTER,
    payload: categoryFilter,
  };
};

export const changeFilterGlass = (glassFilter) => {
  return {
    type: GLASS_CHANGE_FILTER,
    payload: glassFilter,
  };
};

export const changeFilterAlcohol = (alcoholFilter) => {
  return {
    type: ALCOHOL_CHANGE_FILTER,
    payload: alcoholFilter,
  };
};
