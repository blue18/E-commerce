import React, { Component } from 'react';
import ProductDetail from './ProductDetails';

class Product extends Component {

  render() {
    const product = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
      quantity: this.props.quantity,
      image: this.props.image
    }

    return(
      <React.Fragment>
        <ProductDetail id={this.props.id} title={this.props.name} price={this.props.price} /> 
        <button {...product} onClick={this.props.addToCart}>Add</button>
      </React.Fragment>
    );
  }
}

export default Product;