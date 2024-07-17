// import { useState, useEffect, useContext } from 'react';
// import { FaRegHeart } from "react-icons/fa";
// import './ProductsCard.css';
// import { CartContext } from '../Context/CartContext';
// import ReactPaginate from 'react-paginate';
// import { useNavigate } from 'react-router-dom';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageCount, setPageCount] = useState(0);
//   const productsPerPage = 10;
//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const organization_id = '08795f9d14134eab91870836779a7bad';
//   const reverse_sort = false;
//   const Appid = 'XOJ071P81OPLFDZ';
//   const Apikey = 'e01db212643a4df8adcec84fc49ac69920240713090305722296';

//   const fetchProducts = async () => {
//     try {
//       const params = new URLSearchParams({
//         organization_id,
//         reverse_sort,
//         page: currentPage + 1, // Page number (1-indexed)
//         size: productsPerPage,
//         Appid,
//         Apikey,
//       });

//       const response = await fetch(`https://timbu-get-all-products.reavdev.workers.dev/?${params.toString()}`);
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setProducts(data.items || []);
//       setPageCount(Math.ceil(data.total / productsPerPage)); // Assuming the total number of products is provided in the response
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [currentPage]);

//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     navigate('/cart'); // Navigate to the cart page
//   };

//   return (
//     <>
//       <h1>Our Products</h1>
//       <div className="products-grid">
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product, index) => (
//             <div className="product-card" key={index}>
//               <img
//                 src={product?.photos[0]?.url ? `https://api.timbu.cloud/images/${product.photos[0].url}` : 'path/to/placeholder-image.jpg'}
//                 alt={product.name}
//                 className="product-img"
//                 draggable="false"
//               />
//               <div className="heartCont">
//                 <p className="title">{product.name}</p>
//                 <p><FaRegHeart className="heart" /></p>
//               </div>
//               <div className="heartCont">
//                 {product.current_price && product.current_price[0] && product.current_price[0].NGN && (
//                   <span className="text-xs lg:text-lg font-semibold">₦{product.current_price[0].NGN[0]}</span>
//                 )}
//                 <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         breakClassName={'break-me'}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </>
//   );
// };

// export default Product;






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

  const fetchProducts = async () => {
    try {
      const url = `https://api.timbu.cloud/products?organization_id=${organization_id}&reverse_sort=${reverse_sort}&page=${currentPage + 1}&size=${productsPerPage}&Appid=${Appid}&Apikey=${Apikey}`;

      console.log('Fetching products from URL:', url); // Log the URL

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Fetched data:', data); // Log the data

      if (data.items) {
        setProducts(data.items);
        setPageCount(Math.ceil(data.total / productsPerPage)); // Assuming the total number of products is provided in the response
      } else {
        setProducts([]);
        setPageCount(0);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to the cart page
  };

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
