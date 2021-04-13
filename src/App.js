import React, { Fragment, useState, useEffect } from "react";
import PageHeader from "./Components/Header/PageHeader";
import PageFooter from "./Components/Footer/PageFooter";
import { Switch, Route } from "react-router-dom";
import ItemPage from "./Components/ShopPages/ItemPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckOutPage";
import ShopPage from "./Components/ShopPages/ShopPage";
import { CartProvider } from "./CartContext";

const App = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      <CartProvider>
        <PageHeader cart={cart} />
        <Switch>
          <Route exact path="/cart">
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              setCart={setCart}
            />
          </Route>
          <Route path="/shop/allplants">
            <ShopPage category={"Explore All"} />
          </Route>
          <Route path="/shop/houseplants">
            <ShopPage category={"Houseplants"} />
          </Route>
          <Route path="/shop/succulents">
            <ShopPage category={"Succulents"} />
          </Route>
          <Route path="/shop/tillandsia">
            <ShopPage category={"Tillandsia"} />
          </Route>
          <Route path="/shop/supplies">
            <ShopPage category={"Supplies"} />
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
      </CartProvider>
    </Fragment>
  );
};
export default App;
