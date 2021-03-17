import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import ShopHome from "./Components/ShopPages/ShopHome";
import HouseplantsPage from "./Components/ShopPages/HouseplantsPage";
import SucculentPage from "./Components/ShopPages/SucculentPage";
import TillandsiaPage from "./Components/ShopPages/TillandsiaPage";
import SuppliesPage from "./Components/ShopPages/SuppliesPage";
import Profile from "./Components/Profile";
const Routes = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" />
          <Route path="/profile" component={Profile} />
          <Route exact path="/shop" component={ShopHome} />
          <Route path="/shop/houseplants" component={HouseplantsPage} />
          <Route exact path="/shop/succulents" component={SucculentPage} />
          <Route path="/shop/tillandsia" component={TillandsiaPage} />
          <Route exact path="/shop/supplies" component={SuppliesPage} /></Switch>
      </App>
    </BrowserRouter>
  );
};

export default Routes;
