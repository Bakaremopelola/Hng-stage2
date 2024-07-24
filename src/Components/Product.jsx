import { useState, useEffect, useContext } from 'react';
import { FaRegHeart } from "react-icons/fa";
import './ProductsCard.css';
import { CartContext } from '../Context/CartContext';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const productsPerPage = 10;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const organization_id = '08795f9d14134eab91870836779a7bad';
  const reverse_sort = false;
  const Appid = 'XOJ071P81OPLFDZ';
  const Apikey = 'e01db212643a4df8adcec84fc49ac69920240713090305722296';

  const fetchProducts = async (page) => {
    try {
      const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
      url.searchParams.append('organization_id', organization_id);
      url.searchParams.append('reverse_sort', reverse_sort);
      url.searchParams.append('page', page + 1);
      url.searchParams.append('size', productsPerPage);
      url.searchParams.append('Appid', Appid);
      url.searchParams.append('Apikey', Apikey);

      const response = await fetch(url.toString());
      const data = await response.json();

      if (response.ok) {
        setProducts(data.items || []);
        setPageCount(Math.ceil(data.total / productsPerPage));
      } else {
        throw new Error(`Error fetching products: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.length > 0 ? (
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
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  );
};

export default Product;
