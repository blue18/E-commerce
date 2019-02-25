import React from 'react';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const cart = this.props.cart;

    let newCart = cart.map((item) => 
      <p key={item.toString()}>{item}</p>
    );

    return(
      <div style={cartStyle}>{newCart}</div>
    );
  }
}

const cartStyle = {
  textAlign: 'center'
}

export default Cart;