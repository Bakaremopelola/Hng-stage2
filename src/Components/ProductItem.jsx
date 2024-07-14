

import { FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types'; 

const ProductCard = ({ image, title, icon, price, buttonText }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} draggable="false" />
      <div className='product-details'>
        <div className='product'>
          <h3>{title}</h3>
          <FaRegHeart className="icon" />{icon}
        </div>
        <div className="product-info">
          <span className="product-price">{price}</span>
          <button className="add-to-cart-button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  price: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ProductCard;



