

import  { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = {
        name: product.name,
        price: product.current_price[0].NGN[0], // Assuming product.current_price[0].NGN[0] contains the price
        image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
        quantity: 1,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += delta;
    if (newCartItems[index].quantity < 1) newCartItems[index].quantity = 1;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleQuantityChange, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
