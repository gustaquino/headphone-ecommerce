import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ShopContext = createContext(null);

const cartDefault = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopcontextProv = (props) => {
  const [cartItems, setCartItems] = useState(cartDefault());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
