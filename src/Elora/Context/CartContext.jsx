import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { CartReducer } from '../Reducer/CartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage or use empty array
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const [state, dispatch] = useReducer(CartReducer, {
    cartItems: Array.isArray(savedCart) ? savedCart : []
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
