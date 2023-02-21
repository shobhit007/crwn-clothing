import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen((p) => !p)}
    >
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;