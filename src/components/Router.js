import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import ProductPage from './ProductPage';
import Account from './Account';

const Router = (props) => {

  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shop' render={(props) => <Shop {...props} />} />
      <Route path='/about' render={(props) => <About {...props} />} />
      <Route path='/cart' render={(props) => <Cart {...props} />} />
      <Route path='/productpage' render={(props) => <ProductPage {...props} />} />
      <Route path='/account' render={(props) => <Account {...props} />} />
    </Switch>
  );
}

export default Router;