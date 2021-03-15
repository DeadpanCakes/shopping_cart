import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Cart from './Components/CartPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={HomePage}/>
                <Route path ='/cart' component={Cart} />
                <Route path ='/contact' />
                <Route path = '/sign-in' />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;