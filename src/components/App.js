import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: ['clothes']
    };

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main cart={this.state.cart} />
        <Footer />
      </div>
    );
  }
}

export default App;
