// src/pages/CartPage.jsx

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem.jsx';
import './Cart.css';
import { CartContext } from '../Context/CartContext'; 
import PaymentForm from '../Components/PaymentForm.jsx';

const CartPage = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  const shipping = 450; 
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              image={item.image}
              title={item.name}
              quantity={item.quantity}
              price={item.price}
              totalPrice={item.quantity * item.price}
              onQuantityChange={(delta) => handleQuantityChange(index, delta)}
              onRemove={() => handleRemoveItem(index)}
            />
          ))}
          <div className="cart-summary">
            <p>Subtotal: ₦{subtotal}</p>
            <p>Shipping: ₦{shipping}</p>
            <p>Total: ₦{total}</p>
          </div>
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
          <PaymentForm className="payment-form"/>
        </>
      )}
    </div>
  );
};

export default CartPage;
