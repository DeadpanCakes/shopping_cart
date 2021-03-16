import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Cart from './Components/CartPage';
import Profile from './Components/Profle';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={HomePage}/>
                <Route path ='/cart' component={Cart} />
                <Route path ='/contact' />
                <Route path = '/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;