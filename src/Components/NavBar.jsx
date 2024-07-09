
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch , FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const Navbar = () => {
    return (
       <div>
            <nav className="navbar">
            <div className="navbar-logo">
                <h1>Nature&apos;s haven</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="navbar-icons">
                <FaSearch className="Search_icon"/>
                    <input type="text" value="" />
            </div>
                <NavLink to="/CartPage"><MdOutlineShoppingCart className="cart-icon"/></NavLink>
            <button className="navbar-button"> 
              < FaBars/>
            </button>
        </nav>
        <div className="navbar-icons">
                <FaSearch className="Search_icon_show"/>
                    <input type="text" value="" className="show_Input"/>
            </div>
       </div>
        
    );
};

export default Navbar;

