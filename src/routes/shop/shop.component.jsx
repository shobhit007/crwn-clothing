import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview";
import CategoryList from "../category-list/category-list.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
