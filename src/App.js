import React, { Fragment, useState } from "react";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import { Switch, Route } from "react-router-dom";
import ItemPage from "./Components/ShopPages/ItemPage";
import CartPage from "./Components/CartPage";

const App = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (newItem) => setCart((prevCart) => [...prevCart, newItem]);

  const updateQuantity = (newItem) => {
    const updatedCart = cart.map((item) => {
      if (item.id === newItem.id) {
        return {
          ...item,
          quantity: Number(item.quantity) + Number(newItem.quantity),
        };
      }
      return item;
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
        <Route path="/cart">
          <CartPage cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
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
      </Switch>
      {props.children}
      <PageFooter />
    </Fragment>
  );
};
export default App;
