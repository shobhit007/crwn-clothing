import { useNavigate } from "react-router-dom";

import {
  CategoryContainer,
  BodyContainer,
  BackgroundImage,
} from "./category-item.style";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer className="category-body-container">
        <h2>{title}</h2>
        <p>Show Now</p>
      </BodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
