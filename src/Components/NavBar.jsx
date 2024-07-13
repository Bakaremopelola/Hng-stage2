import { useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaSearch, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="menu-main">
      <div className="school">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Nature&apos;s Haven</h1>
          </div>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <div className="navbar-icons">
            <FaSearch className="Search_icon" />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
          <NavLink to="/CartPage">
            <MdOutlineShoppingCart className="cart-icon" />
          </NavLink>
          <button className="navbar-button" onClick={toggleMenu}>
            <FaBars />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <NavLink to="/CartPage">
              <MdOutlineShoppingCart className="cart-icon" />
            </NavLink>
          </div>
        )}
      </div>
      <div className="navbar-icons1">
        <FaSearch className="Search_icon" />
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Navbar;
