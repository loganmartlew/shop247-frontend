import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import moveArrayItem from '../util/moveArrayItem';

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

  const addItem = item => {
    // Validate item

    // Check for duplicate

    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = index => {
    const newCart = cart.filter((_, i) => i !== index);

    setCart(newCart);
  };

  const updateItem = (newItem, index) => {
    // Validate item

    const newCart = cart.map((item, i) => {
      if (i === index) {
        return newItem;
      }

      return item;
    });

    setCart(newCart);
  };

  // Public properties/functions when context is used
  const value = {
    cart,
    addItem,
    removeItem,
    updateItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
