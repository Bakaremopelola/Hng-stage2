
import './Header.css';
import Cart from "../assets/Cart.png" ;


const Header = () => {
  return (
    <>
      <div className="head">
        <div className="text">
          <h1>fresh and healthy</h1>
          <h1> vegetables and fruits</h1>
          <p className='text-p'>They are produced by methods that <br /> comply with the standards of farming</p>
          <button className='HeaderBtn'>shop now</button>
        </div>
        <div className="cart">
          <img src={Cart} alt="Cart" className='Cart-img' />
        </div>
      </div>
    </>
  )
}

export default Header;

