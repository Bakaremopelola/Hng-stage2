import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import DeliveryMode from '../Components/DliveryMode';
import PaymentForm from '../Components/PaymentForm';
import CheckoutButton from '../Components/Checkout';
import Footer from '../Components/Footer.jsx';
import {FaArrowLeft} from 'react-icons/fa6';
import Date from '../assets/Date.png';
import HNG3 from '../assets/HNG3.jpg';
import HNG2 from '../assets/HNG2.jpg';

import './Cart.css';

const initialCartItems = [
  {
    image: Date,
    title: 'Almond fruit',
    weight: '100g',
    quantity: 1,
    price: 2000,
  },
  {
    image: HNG3,
    title: 'Curry Powder',
    weight: '100g',
    quantity: 2,
    price: 700,
  },
  {
    image: HNG2,
    title: 'Corriander Powder',
    weight: '100g',
    quantity: 2,
    price: 1200,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [deliveryMode, setDeliveryMode] = useState('home');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += delta;
    if (newCartItems[index].quantity < 1) newCartItems[index].quantity = 1;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

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
    <div className='main'>
      <div className="cart-page">
        <div className='Cart'>
        <div className="strike1">
         <Link to='/' className='had'><FaArrowLeft /></Link>
         <h1 className='certificate'>My Cart</h1>
            <h1 className='had1'></h1>
            </div>
          
          <NavLink to="/" className="continue-shopping-link">
            <button className="continue-shopping-button">← Continue shopping</button>
          </NavLink>
        </div>

        <div className='goat'>
          <div className='cart-header'>
            <h4>Product Details</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Total</h4>
          </div>

          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                title={item.title}
                weight={item.weight}
                quantity={item.quantity}
                price={item.price}
                totalPrice={item.quantity * item.price}
                onQuantityChange={(delta) => handleQuantityChange(index, delta)}
                onRemove={() => handleRemoveItem(index)}
              />
            ))}
          </div>

          <div className='payment'>
            <DeliveryMode selectedMode={deliveryMode} onChangeMode={setDeliveryMode} />
            <div className="cart-summary">
              <p className='sam'>SUBTOTAL: <p >N {subtotal}</p></p>
              <p className='sam'>SHIPPING: <p >N {shipping}</p></p>
              <p className='sam'>TOTAL: <p >N {total}</p></p>

              <CheckoutButton onClick={handleCheckoutClick} />

              <div className="App">
                {showPaymentForm && <PaymentForm onSubmit={handlePaymentSubmit} />}
              </div>
            </div>
          </div>
        </div>

        <div className='PF'><PaymentForm className="payment-form"/> </div>
      </div>

      <div className="footer">
        <Footer className="CartFooter"/>
      </div>
    </div>
  );
};

export default CartPage;
