import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions/shoppingCartActions';
import { Table } from 'reactstrap';

class Cart extends React.Component {

    deleteFromCart = (event) => {
      event.preventDefault();
      this.props.deleteFromCart(event);
    }

    render() {

      // Get list of products
      const products = this.props.products;
      let totalPrice = 0;

      // Calculate the total price 
      products.forEach(product => {
        totalPrice = parseFloat(product.price) + totalPrice;
      });

      // Get name and price of products from list 
      const aProduct = products.map((product) => {
        return (
          <tr key={parseInt(product.id)} >
            <td > 
              <img src={product.image} alt="pic1" width="200" height="100" /> 
            </td>
            <td > {product.name} </td>
            <td > Description... </td>
            <td > ${product.price} </td>
            <td > {product.quantity} </td>
            <td > <button {...product} onClick={this.deleteFromCart}>Remove</button> </td>
          </tr>
        );
      });

      // if the shopping cart is empty print empty cart 
      if(products.length <= 0) {
        return(
          <div className={`container-fluid`} style={emptyCart}>
            Cart is empty
            <div>
              <img alt="empty_cart" />
            </div>
          </div>
        );
      } else {
        return(
          <div>
            <div><h1>Cart</h1></div>
            <div className={`container`} style={allProducts}> 
              <div style={cartheader}>
                <a href="https://www.w3schools.com/html/">Continue Shopping</a>
              </div>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {aProduct}
                  </tbody>
                </Table>
              </div>

              <div className={`row`}>
                <div className={`col-12`}>
                  <hr />
                </div>
              </div>
              <div className={`row`}>
                <div className={`col`}></div>
                <div className={`col`}></div>
                <div className={`col`} style={priceCol}>
                  <b>{`Total Price: $${totalPrice.toFixed(2)}`}</b>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
}

const emptyCart = {
  textAlign: "center",
  fontSize: "30px",
}

const cartheader = {
  textAlign: "center",
  paddingTop: "15px",
  paddingBottom: "15px"
}

const priceCol = {
  textAlign: "center",
  fontSize: "40px"
}

const allProducts = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const mapStateToProps = state => ({
  products : state.shoppingCart.listOfProducts
});

export default connect(mapStateToProps, { deleteFromCart })(Cart);