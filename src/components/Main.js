import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';
import Cart from './Cart';

const Main = (props) => {

  const cart = props.cart;

  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/store' render={(props) => <Store {...props} cart={cart} />} />
      <Route path='/about' component={About}/>
      <Route path='/cart' render={(props) => <Cart {...props} cart={cart} />} />
    </Switch>
  );
}

export default Main;