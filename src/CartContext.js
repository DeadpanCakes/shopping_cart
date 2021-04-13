import { createContext, useState } from "react";

const CartContext = createContext({items: []});

export function CartProvider(props) {
  const [cartState, setCartState] = useState({items: []});
  const updateQuantity = (targetItem, newQuantity) => {
    setCartState((prevCart) => {
      return prevCart.map((item) => {
        if (targetItem.id === item.id) {
          return { ...targetItem, quantity: item.quantity + newQuantity };
        }
        return item;
      });
    });
  };
  const addItem = (newItem) => {
    if (cartState.some((item) => newItem.id === item.id)) {
      updateQuantity(newItem, newItem.quantity);
    } else {
      setCartState((prevCart) => [...prevCart, newItem]);
    }
  };
  const removeItem = (item) =>
    setCartState((prevCart) =>
      prevCart.filter((targetItem) => item !== targetItem)
    );

  const cart = {
    items: cartState,
    addItem,
    removeItem,
    setItems: setCartState
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
}

export function CartConsumer(props) {
  return <CartContext.Consumer>{props.children}</CartContext.Consumer>;
}
