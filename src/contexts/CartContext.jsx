import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';

const CartContext = createContext({});

// Custom hook to consume context
export const useCart = () => useContext(CartContext);

// Context Provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');

    if (!storedCart) return;
    if (!Array.isArray(storedCart)) return;

    setCart(storedCart);
  }, []);

  // Save cart to local storage on cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Public properties/functions when context is used
  const value = {
    cart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
