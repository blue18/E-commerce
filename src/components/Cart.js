import React from 'react';
import { connect } from 'react-redux';
import { showProducts } from '../actions/shoppingCartActions';

class Cart extends React.Component {

  componentDidMount() {
    console.log(this.props.products);
  }

  render() {

    // Get list of products
    const products = this.props.products;

    // Get name and price of products from list 
    const aProduct = products.map(function(product) {
      return <li key={product.id} > { product.name } { product.price } </li>;
    });

    return(
      <div style={cartStyle}> { aProduct }</div>
    );
  }
}

const cartStyle = {
  textAlign: 'center'
}

const mapStateToProps = state => ({
  products : state.shoppingCart.listOfProducts
});

export default connect(mapStateToProps, { showProducts })(Cart);