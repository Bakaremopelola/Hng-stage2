import Category from "../Components/Category"
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header"
import Navbar from "../Components/NavBar"
import Product from '../Components/Product.jsx';

import man from './homepage.module.css'


const HomePage = () => {
  return (
    <>
    <div className={man.main}>
      <Navbar/>
      <Header/>
      <Category/>
      <Product/>
      <Footer/>
      
    </div>
    </>
  )
}

export default HomePage



