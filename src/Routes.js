import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import ShopHome from "./Components/ShopPages/ShopHome";
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
          </Switch>
      </App>
    </BrowserRouter>
  );
};

export default Routes;
