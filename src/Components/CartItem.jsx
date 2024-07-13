



const CartItem = ({ image, title, quantity, price, totalPrice, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{title}</h2>
        <button onClick={onRemove}>Remove</button>
        {/* <p>Total: ₦{totalPrice}</p> */}
        </div>
        {/* <p>Price: ₦{price}</p> */}
        
       <div className="cart-item-quantity">
          <button onClick={() => onQuantityChange(-1)}>-</button>
          <span className="num">{quantity}</span>
          <button onClick={() => onQuantityChange(1)}>+</button>
        </div>
        
        <p className="cart-item-price">Total: ₦{totalPrice}</p> 
        <p className="cart-item-total-price">Price: ₦{price}</p>
      </div>
    
  );
};

export default CartItem;
