import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
import { withRouter } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cart: ['clothes'],
      message: 'This message.'
    };
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState(
        {
          message: "Hello world..."
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Main cart={this.state.cart} 
              giveDiscount={() => this.giveDiscountHandler()}
              message={this.state.message} />
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  promoCode: state.promoCode.value,
});

export default withRouter(connect(mapStateToProps, { handleChange })(App));