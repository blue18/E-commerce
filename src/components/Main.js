import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import ProductPage from './productPage';

const Main = (props) => {

  const cart = props.cart;
  const giveDiscount = props.giveDiscount;
  const message = props.message;

  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shop' render={(props) => <Shop {...props} cart={cart} />} />
      <Route path='/about' 
             render={(props) => <About {...props} 
             giveDiscount={giveDiscount} 
             message={message} cart={cart} />} 
      />
      <Route path='/cart' render={(props) => <Cart {...props} cart={cart} />} />
      <Route path='/productpage' render={(props) => <ProductPage {...props} />} />
    </Switch>
  );
}

export default Main;