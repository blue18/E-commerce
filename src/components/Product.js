import React, { Component } from 'react';
import ProductDetail from './ProductDetails';

class Product extends Component {

  render() {
    return(
      <div>
        <ProductDetail id={this.props.id} title={this.props.name} /> 
      </div>
    );
  }
}

export default Product;