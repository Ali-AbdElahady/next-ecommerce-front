"use client";
const { createContext, useState } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <CartContext.Provider value={{cartProducts,setCartProducts}}>{children}</CartContext.Provider>
  );
}
