
import { Link } from 'react-router-dom';
import './PaymentForm.css';

function PaymentForm() {
  
  return (
    <div className="payment-form">
     
      <form >
        <label htmlFor="card-number">Card number</label>
        <div className="card-number">
          <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" maxLength="19" />
          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard Logo" className='mastercard' />
        </div>
        <div className="expiration-cvc">
          <div>
            <label htmlFor="expiration">Expiration</label>
            <input type="text" id="expiration" placeholder="MM/YY" maxLength="5" />
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" maxLength="4" />
          </div>
        </div>
        <Link to="/checkout"><button className='fcmb' type="submit">Confirm Payment</button></Link>
      </form>
    </div>
  );
}

export default PaymentForm;
