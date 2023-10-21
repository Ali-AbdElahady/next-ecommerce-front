"use client";
const { createContext, useState, useEffect } = require("react");

const initialValue = {
  cartItems: [],
  addItem: () => {},
  deleteItem: () => {},
  clearCart: () => {},
};

export const CartContext = createContext(initialValue);

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems,ls]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      const itemsId = JSON.parse(ls.getItem("cart"));
      const idsWithOutNull = itemsId.filter((id) => id !== null);
      ls.setItem("cart", JSON.stringify(idsWithOutNull));
      setCartItems(idsWithOutNull);
    }
  }, []);
  function addItem(productId) {
    setCartItems((prev) => [...prev, productId]);
  }
  function deleteItem(productId) {
    setCartItems((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
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
    clearCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
