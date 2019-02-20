import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';

const Main = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/store' component={Store}/>
      <Route path='/about' component={About}/>
    </Switch>
  );
}

export default Main;