import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Initialize State from LocalStorage (Memory)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Save to LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 3. Add to Cart Function
  const addToCart = (book, quantity = 1) => {
    setCart((prevCart) => {
      // Check if item already exists
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        // If exists, just increase quantity
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If new, add to array
        return [...prevCart, { ...book, quantity: quantity }];
      }
    });
  };

  // 4. Remove Function
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
// --- ADD THIS FUNCTION ---
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  // 5. Update Quantity Function (for the + and - buttons)
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};