import { all, call, takeLatest, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category-action";

import { CATEGORIES_ACTION_TYPES } from "./category-types";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* fetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FECTH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categorySaga() {
  yield all([call(fetchCategories)]);
}
