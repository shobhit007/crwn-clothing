import "./category-list.styles.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category-selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoryList = () => {
  const { category } = useParams();
  const categoryTitle = category.toLowerCase();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[categoryTitle]);

  useEffect(() => {
    setProducts(categoriesMap[categoryTitle]);
  }, [categoryTitle, categoriesMap]);

  return (
    <div className="category-list-container">
      <h2 className="category-title">{categoryTitle}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-list-wrapper">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
