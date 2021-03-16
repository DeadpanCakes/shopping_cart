import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ShopHome from './Components/ShopPages/ShopHome';
import Cart from "./Components/CartPage";
import Profile from "./Components/Profle";
import PageHeader from "./Components/PageHeader";

const Routes = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" />
        <Route path="/profile" component={Profile} />
        <Route path="/shop" component={ShopHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
