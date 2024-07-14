import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './checkout.css';
import { FaArrowLeft } from "react-icons/fa6";
import DoneModal from '../Components/DoneModal';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment process
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="payment-form1">
      <div className="strike">
        <Link to='/cartPage'><FaArrowLeft /></Link>
        <h1 className='PD'>Payment Details</h1>
        <h1></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-number" className='CN'>Card number</label>
        <div className="card-number">
          <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" maxLength="19" />
          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard Logo" className='mastercard' />
        </div>
        <div className="expiration-cvc">
          <div className='lag'>
            <label htmlFor="expiration">Expiration</label>
            <input type="text" id="expiration" placeholder="MM/YY" maxLength="5" />
          </div>
          <div className='lag'>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" maxLength="4" />
          </div>
        </div>
        <button className='fcmb' type="submit">Confirm Payment</button>
      </form>
      <DoneModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default Checkout;
