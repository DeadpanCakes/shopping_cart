import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ShopHome from './Components/ShopPages/ShopHome';
import SucculentPage from './Components/ShopPages/SucculentPage';
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
        <Route exact path="/shop" component={ShopHome} />
        <Route path="/shop/succulents" component={SucculentPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
