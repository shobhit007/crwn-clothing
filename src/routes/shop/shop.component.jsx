import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCategoriesAsync } from "../../store/categories/category-action";

import CategoriesPreview from "../categories-preview/categories-preview";
import CategoryList from "../category-list/category-list.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
