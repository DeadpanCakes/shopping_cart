import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import SignUp from './Components/Profile/SignUp';
import LogIn from './Components/Profile/LogIn'
import ShopHome from "./Components/ShopPages/ShopHome";
import Profile from "./Components/Profile/Profile";
import ScrollToTop from "./ScrollToTop";
import About from "./Components/Info/About";
import Contact from "./Components/Info/Contact";
import Shipping from "./Components/Info/Shipping";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/profile/sign-up" component={SignUp} />
          <Route path="/profile/log-in" component={LogIn} /> 
          <Route path="/profile" component={Profile} />
          <Route exact path="/shop" component={ShopHome} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default Routes;
