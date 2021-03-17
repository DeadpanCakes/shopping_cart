import React, { Fragment, useState } from "react";
import PageHeader from "./Components/PageHeader";
import PageFooter from "./Components/PageFooter";
import { Switch, Route } from "react-router-dom";
import ItemPage from "./Components/ShopPages/ItemPage";
import CartPage from "./Components/CartPage";

const App = (props) => {
  const [cart, setCart] = useState(["hello"]);
  return (
    <Fragment>
      <PageHeader />
      <Switch>
        <Route path="/cart">
          <CartPage cart={cart} />
        </Route>
        <Route path="/shop/item/:id" component={ItemPage} />
      </Switch>
      {props.children}
      <PageFooter />
    </Fragment>
  );
};
export default App;
