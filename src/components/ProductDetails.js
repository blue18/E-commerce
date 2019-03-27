import React, { Component } from 'react';


class ProductDetails extends Component {

  render() {
    return(
      <React.Fragment>
        <div>{this.props.title}</div>
        <div>{this.props.price}</div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;