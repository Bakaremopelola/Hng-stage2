import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa";
import './ProductsCard.css';
import { CartContext } from '../Context/CartContext'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: {
            organization_id: '08795f9d14134eab91870836779a7bad',
            reverse_sort: false,
            page: 1,
            size: 10,
            Appid: 'XOJ071P81OPLFDZ',
            Apikey: 'e01db212643a4df8adcec84fc49ac69920240713090305722296'
          }
        });
        console.log('API response:', response); 
        setProducts(response.data.items || []); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Our Products</h1>
      <div className="products-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product?.photos[0]?.url ? `https://api.timbu.cloud/images/${product.photos[0].url}` : 'path/to/placeholder-image.jpg'}
                alt={product.name}
                className="product-img"
                draggable="false"
              />
              <div className="heartCont">
                <p className="title">{product.name}</p>
                <p><FaRegHeart className="heart" /></p>
              </div>
              <div className="heartCont">
                {product.current_price && product.current_price[0] && product.current_price[0].NGN && (
                  <span className="text-xs lg:text-lg font-semibold">₦{product.current_price[0].NGN[0]}</span>
                )}
                <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Product;
