import React, { Fragment, useState } from "react";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import { Switch, Route } from "react-router-dom";
import ItemPage from "./Components/ShopPages/ItemPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckOutPage";

import succulentFactory from "./items/succulentFactory";

const App = (props) => {
  const [cart, setCart] = useState([
    {...succulentFactory(2, 'Echeveria "Lola"', 4, [
      "Pastel",
      "Multicolor",
      "Drought-Resistant",
      "Showy Bloom",
    ]), quantity: 5},
    {...succulentFactory(3, 'Echeveria "Raspberry Ice"', 6, [
      "Pastel",
      "Drought-Resistant",
      "Showy Bloom",
    ]), quantity: 1},
    {...succulentFactory(4, 'Sedum "Burrito"', 4, [
      "Drought-Resistant",
      "Easy to Propagate",
      "Non-Toxic",
      "Hanging",
    ]), quantity: 2},
  ]);
  const addToCart = (newItem) => setCart((prevCart) => [...prevCart, newItem]);

  const updateQuantity = (newItem) => {
    const updatedCart = cart.map((item) => {
      if (item.quantity + newItem.quantity < 20) {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: Number(item.quantity) + Number(newItem.quantity),
          };
        }
        return item;
      } else {
        if (item.id === newItem.id) {
          return {
            ...item,
            quantity: 20,
          };
        }
        return item;
      }
    });
    setCart(updatedCart);
  };

  const removeFromCart = (targetItem) => {
    const updatedCart = cart.filter((item) => !(item.id === targetItem.id));
    setCart(updatedCart);
  };

  return (
    <Fragment>
      <PageHeader cart={cart} />
      <Switch>
        <Route exact path="/cart">
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            setCart={setCart}
          />
        </Route>
        <Route
          path="/shop/item/:id"
          component={(props) => (
            <ItemPage
              {...props}
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
            />
          )}
        />
        <Route path="/cart/checkout">
          <CheckoutPage cart={cart} />
        </Route>
      </Switch>
      {props.children}
      <PageFooter />
    </Fragment>
  );
};
export default App;
