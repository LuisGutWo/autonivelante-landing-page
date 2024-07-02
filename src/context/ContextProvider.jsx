"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    const itemExists = cart.find((i) => i.id === item.id);

    if (itemExists) {
      setCart(
        cart.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i))
      );
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };

  const totalItemProducts = () => {
    return cart.reduce((acc, item) => acc + item.count, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const onCleanCart = () => {
    setCart([]);
    totalCart(0);
    totalItemProducts(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        onCleanCart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { ContextProvider, CartContext };
