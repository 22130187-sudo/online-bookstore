// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (book, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prev, { ...book, quantity }];
      }
    });

    setNotification(`${book.title} added to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  const removeFromCart = (bookId) => {
    setCart(prev => prev.filter(b => b.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity < 1) return; // prevent zero or negative
    setCart(prev =>
      prev.map(item => (item.id === bookId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};
