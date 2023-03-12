import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((accmu, category) => {
      const { title, items } = category;
      accmu[title.toLowerCase()] = items;
      return accmu;
    }, {})
);
