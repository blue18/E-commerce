import React, { Component } from 'react';
import ProductDetail from './ProductDetails';

class Product extends Component {

  render() {
    return(
      <div>
        <ProductDetail id={this.props.id} title={this.props.name} price={this.props.price} /> 
      </div>
    );
  }
}

export default Product;