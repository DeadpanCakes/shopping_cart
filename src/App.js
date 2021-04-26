import React, { Fragment } from "react";
import PageHeader from "./Components/Header/PageHeader";
import PageFooter from "./Components/Footer/PageFooter";
import { Switch, Route } from "react-router-dom";
import ItemPage from "./Components/ShopPages/ItemPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/Checkout/CheckOutPage";
import ShopPage from "./Components/ShopPages/ShopPage";
import { CartProvider } from "./CartContext";

const App = (props) => {
  return (
    <Fragment>
      <CartProvider>
        <PageHeader />
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route path="/shop/all">
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
            component={ItemPage}
          />
          <Route path="/cart/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
        {props.children}
        <PageFooter />
      </CartProvider>
    </Fragment>
  );
};
export default App;
