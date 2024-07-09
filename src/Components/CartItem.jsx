import {RiDeleteBin5Fill} from 'react-icons/ri';
const CartItem = ({ image, title, weight, quantity, price, totalPrice, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />

      <div className="cart-item-details">
        <p className="cart-item-title">{title}</p>
        <p className="cart-item-weight">{weight}</p>
        <div className="cart-item-remove" onClick={onRemove}><RiDeleteBin5Fill /></div>
      </div>


      <div className="cart-item-quantity">
        <button onClick={() => onQuantityChange(-1)}>-</button>
        <span className="num">{quantity}</span>
        <button onClick={() => onQuantityChange(1)}>+</button>
      </div>

      <p className="cart-item-price">N {price}</p>
      <p className="cart-item-total-price">N {totalPrice}</p>
      
    </div>
  );
};

export default CartItem;
