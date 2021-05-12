import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Components/HomePage";
import ShopHome from "./Components/ShopPages/ShopHome";
import Profile from "./Components/Profile";
import ScrollToTop from "./ScrollToTop";
import About from './Components/Info/About';
import Contact from './Components/Info/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/profile" component={Profile} />
          <Route exact path="/shop" component={ShopHome} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default Routes;
