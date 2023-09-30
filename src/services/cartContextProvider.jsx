"use client";
const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    if (cartItems?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartItems(JSON.parse(ls.getItem('cart')));
    }
  }, []);
  function addItem(productId) {
    setCartItems(prev => [...prev,productId]);
  }
  function deleteItem(productId) {
    setCartItems(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
  function clearCart() {
    setCartItems([]);
  }

  const cartContextValue = {
    cartItems,
    addItem,
    deleteItem,
    clearCart
  };
  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
}
