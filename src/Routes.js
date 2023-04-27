import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/Profile/SignUp";
import LogIn from "./Components/Profile/LogIn";
import ShopHome from "./Components/ShopPages/ShopHome";
import Profile from "./Components/Profile/Profile";
import ScrollToTop from "./ScrollToTop";
import About from "./Components/Info/About";
import Contact from "./Components/Info/Contact";
import Shipping from "./Components/Info/Shipping";
import Orders from "./Components/Profile/OrdersHistory";
import Wishlist from "./Components/Profile/Wishlist";
import SearchResults from "./Components/ShopPages/SearchResults";
import Home from "./Home";

const Routes = () => {
  return (
    <HashRouter basename={process.env.basename}>
      <ScrollToTop />
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/profile/sign-up" component={SignUp} />
          <Route path="/profile/log-in" component={LogIn} />
          <Route path="/profile/orders" component={Orders} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/shop/search" component={SearchResults} />
          <Route exact path="/shop" component={ShopHome} />
        </Switch>
      </App>
    </HashRouter>
  );
};

export default Routes;
