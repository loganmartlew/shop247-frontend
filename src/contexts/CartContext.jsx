import { createContext } from 'react';
import { useState, useEffect, useContext } from 'react';
import cartItemIsDuplicate from '../util/cartItemIsDuplicate';
import cartItemIsValid from '../util/cartItemIsValid';
import getCartPrice from '../util/getCartPrice';
import { useNotification } from './NotificationContext';

const CartContext = createContext({});

// Custom hook to consume context
export const useCart = () => useContext(CartContext);

// Context Provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [cartPrice, setCartPrice] = useState(0);

  const { addError, addSuccess } = useNotification();

  // Load cart from local storage on component mount
  useEffect(() => {
    const lsVal = localStorage.getItem('cart');
    if (!lsVal) {
      setCart([]);
      return;
    }

    const storedCart = JSON.parse(lsVal);

    if (!storedCart || !Array.isArray(storedCart)) {
      setCart([]);
      return;
    }

    setCart(storedCart);
  }, []);

  // Save cart to local storage on cart changes
  useEffect(() => {
    if (!cart) return;
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Fetch cart price when cart is updated
  useEffect(() => {
    if (!cart || cart.length < 1) return;

    getCartPrice(cart).then(price => {
      if (price == null) return setCartPrice(0);
      return setCartPrice(price);
    });
  }, [cart]);

  const addItem = item => {
    // Validate item
    if (!cartItemIsValid(item)) {
      return addError('Invalid cart item');
    }

    // Check for duplicate
    if (cartItemIsDuplicate(cart, item)) {
      return addError('Item already in cart');
    }

    setCart(prevCart => [...prevCart, item]);
    addSuccess('Item added to cart');
  };

  const removeItem = id => {
    const newCart = cart.filter(item => item.product._id !== id);

    setCart(newCart);
  };

  const updateItem = (newItem, index) => {
    // Validate item
    if (!cartItemIsValid(newItem)) {
      return addError('Invalid cart item');
    }

    const newCart = cart.map((item, i) => {
      if (i === index) {
        return newItem;
      }

      return item;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // Public properties/functions when context is used
  const value = {
    cart,
    cartPrice,
    addItem,
    removeItem,
    updateItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
