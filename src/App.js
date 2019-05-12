import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(App));