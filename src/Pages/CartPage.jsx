import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import DeliveryMode from '../Components/DliveryMode';
import PaymentForm from '../Components/PaymentForm';
import CheckoutButton from '../Components/Checkout';
import Footer from '../Components/Footer.jsx';
import { FaArrowLeft } from 'react-icons/fa6';
import './Cart.css';
import { CartContext } from '../Context/CartContext';

const CartPage = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);
  const [deliveryMode, setDeliveryMode] = useState('home');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  const shipping = deliveryMode === 'home' ? 450 : 0;
  const total = subtotal + shipping;

  const handleCheckoutClick = () => {
    console.log("Checkout button clicked");
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = () => {
    console.log("Payment form confirmed");
    // Handle the payment logic here
  };

  return (
    <div className="main">
      <div className="cart-page">
        <div className="Cart">
          <div className="strike1">
            <Link to="/" className="had"><FaArrowLeft /></Link>
            <h1 className="certificate">My Cart</h1>
            <h1 className="had1"></h1>
          </div>

          <NavLink to="/" className="continue-shopping-link">
            <button className="continue-shopping-button">← Continue shopping</button>
          </NavLink>
        </div>

        <div className="goat">
          <div className="cart-header">
            <h4>Product Details</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Total</h4>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
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
              ))
            )}
          </div>

          <div className="payment">
            <DeliveryMode selectedMode={deliveryMode} onChangeMode={setDeliveryMode} />
            <div className="cart-summary">
              <p className="sam">SUBTOTAL: <span>N {subtotal}</span></p>
              <p className="sam">SHIPPING: <span>N {shipping}</span></p>
              <p className="sam">TOTAL: <span>N {total}</span></p>

              <CheckoutButton onClick={handleCheckoutClick} />

              {showPaymentForm && <PaymentForm onSubmit={handlePaymentSubmit} />}
            </div>
          </div>
        </div>

        <div className="footer">
        <Footer className="CartFooter"/>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
