import React from 'react';
import { connect } from 'react-redux';
import { showProducts } from '../actions/shoppingCartActions';

function Cart(props) {

    // Get list of products
    const products = props.products;
    let totalPrice = 0;
    
    products.map(product => {
      totalPrice = parseFloat(product.price) + totalPrice;
    });

    // Get name and price of products from list 
    const aProduct = products.map(function(product) {
      return (
        <div key={parseInt(product.id)} className={`row`}>
          <div className={`col`}> 
            <img src={"https://www.computerhope.com/jargon/b/binary-0s-1s.jpg"} width="200" height="100" /> 
          </div>
          <div className={`col`}> {product.name} </div>
          <div className={`col`}> Description... </div>
          <div className={`col`}> {product.price} </div>
          <div className={`col`}> 
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
           </div>
           <div className={`col`}> <button>Remove</button> </div>
        </div>

      );
    });

    return(
      <div className={`container`} style={allProducts}> 
        {aProduct}
        <div className={`row`}>
          <div className={`col`}></div>
          <div className={`col`}></div>
          <div className={`col`} style={priceCol}>
            <b>{`Total Price: $${totalPrice.toFixed(2)}`}</b>
          </div>
        </div>
      </div>
    );
}

const priceCol = {
  textAlign: "center",
  fontSize: "40px"
}

const allProducts = {
  border: "solid"
}

const productStyle = {
  padding: "25px",
  backgroundColor: "red",
  border: "solid"
}

const cartStyle = {
  textAlign: 'center'
}

const mapStateToProps = state => ({
  products : state.shoppingCart.listOfProducts
});

export default connect(mapStateToProps, { showProducts })(Cart);