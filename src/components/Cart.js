import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions/shoppingCartActions';

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
          <div key={parseInt(product.id)} className={`row`}>
            <div className={`col`}> 
              <img src={product.image} alt="pic1" width="200" height="100" /> 
            </div>
            <div className={`col`}> {product.name} </div>
            <div className={`col`}> Description... </div>
            <div className={`col`}> ${product.price} </div>
            <div className={`col`}> 
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className={`col`}> <button {...product} onClick={this.deleteFromCart}>Remove</button> </div>
          </div>
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
              {aProduct}
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