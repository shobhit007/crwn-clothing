import "./category-list.styles.scss";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

const CategoryList = () => {
  const { category } = useParams();
  const categoryTitle = category.toLowerCase();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[categoryTitle]);

  useEffect(() => {
    setProducts(categoriesMap[categoryTitle]);
  }, [categoryTitle, categoriesMap]);

  return (
    <div className="category-list-container">
      <h2 className="category-title">{categoryTitle}</h2>
      <div className="category-list-wrapper">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
