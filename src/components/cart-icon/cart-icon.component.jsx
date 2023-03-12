import { useDispatch, useSelector } from "react-redux";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const handleCartOpen = () => dispatch(setIsCartOpen());

  return (
    <CartIconContainer onClick={handleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
