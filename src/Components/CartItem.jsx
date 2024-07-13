



const CartItem = ({ image, title, quantity, price, totalPrice, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2>{title}</h2>
        <p>Price: ₦{price}</p>
        <p>Total: ₦{totalPrice}</p>
        <div className="quantity-controls">
          <button onClick={() => onQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(1)}>+</button>
        </div>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
