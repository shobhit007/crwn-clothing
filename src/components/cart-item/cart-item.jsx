import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { name, quantity, imageUrl, price } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>{`${quantity} X $${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
