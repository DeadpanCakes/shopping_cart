import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import ShopPage from './Components/ShopPage';
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
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
