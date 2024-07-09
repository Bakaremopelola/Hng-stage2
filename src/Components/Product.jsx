
import { FaRegHeart } from "react-icons/fa"
import './ProductsCard.css';

// Import images
import HNG1 from '../assets/HNG1.jpg';
import HNG2 from '../assets/HNG2.jpg';
 import HNG3 from '../assets/HNG3.jpg';
// import HNG4 from '../assets/HNG4.jpg';
// import HNG5 from '../assets/HNG5.jpg';
import HNG6 from '../assets/HNG6.jpg';
import hng7 from '../assets/hng7.jpg';
import hng8 from '../assets/hng8.jpg';
import hng9 from '../assets/hng9.jpg';
import hng12 from '../assets/hng12.jpg';
import hng13 from '../assets/hng13.jpg';
import hng14 from '../assets/hng14.jpg';
import hng15 from '../assets/hng15.jpg';
import hng18 from '../assets/hng18.jpg';
import hng19 from '../assets/hng19.jpg';
import hng23 from '../assets/hng23.jpg';
import RedPepper from "../assets/RedPepper.png"
// import Ginger from "../assets/Ginger.png"
// import Groundnut from "../assets/Groundnut.png"
// import Date from "../assets/Date.png"

const productsData = [
  { image: HNG2, title: 'Corriander Seeds', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image:  RedPepper , title: 'Paprika Powder', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng18, title: 'Bayleaves', icon: FaRegHeart, price: 'N1000', buttonText: 'Add to Cart' },
  { image: HNG3, title: 'Curry Powder', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng7, title: 'Tomatoes', icon: FaRegHeart, price: 'N2500', buttonText: 'Add to Cart' },
  { image: hng8, title: 'Broccoli', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng15, title: 'Bananas', icon: FaRegHeart, price: 'N2000', buttonText: 'Add to Cart' },
  { image: hng14, title: 'Coconut', icon: FaRegHeart, price: 'N900', buttonText: 'Add to Cart' },
  { image: hng19, title: 'Fresh Juice', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng23, title: 'Watermelon Drink', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: HNG6, title: 'Irish Potatoes', icon: FaRegHeart, price: 'N4000', buttonText: 'Add to Cart' },
  { image: hng13, title: 'Bell Pepper', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng12, title: 'Corn', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: HNG1, title: 'Carrot', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  { image: hng9, title: 'Onions', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  // { image: HNG5, title: 'Cabbage', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  // { image: HNG4, title: 'Eggs', icon: FaRegHeart, price: 'N3500', buttonText: 'Add to Cart' },
  // { image: Ginger, title: 'Ginger', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  // { image: Groundnut, title: 'Paprika Powder', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
  // { image: Date, title: 'Paprika Powder', icon: FaRegHeart, price: 'N1200', buttonText: 'Add to Cart' },
];

const Product = () => {
  return (
    <>
      <h1>Our Products</h1>
      <div className="products-grid">
        {
          productsData.map((productInfo, index) =>{
             return <div className="product-card" key={index}>
              <img src={productInfo.image} alt=""  className="product-img" draggable="false"/>
              <div className="heartCont">
                 <p className="title">{productInfo.title}</p>
                <p> <FaRegHeart className="heart" /></p>
              </div>
              <div className="heartCont">
                 <p className="title">{productInfo.price}</p>
                   <button className="add-to-cart-btn">{productInfo.buttonText}</button>
              </div>
             </div>
          } )
        }
      </div>
    </>
  );
};

export default Product;
