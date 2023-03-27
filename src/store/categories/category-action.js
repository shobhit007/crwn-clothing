import { CATEGORIES_ACTION_TYPES } from "./category-types";

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_FAILED,
  payload: error,
});
