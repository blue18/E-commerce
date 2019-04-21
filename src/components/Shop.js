import React from 'react';
import Title from './Title';

import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingCartActions';
import { Link } from 'react-router-dom';


import Product from './Product';

/*
  add products here for testing purposes 
*/

const product_one = {
  id: 1,
  name: "blue_sweater",
  price: "3.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/50995950_040_b.jpeg')
};

const product_two = {
  id: 2,
  name: "Rose Green",
  price: "4.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/48582498_031_b.jpeg')
};

const product_three = {
  id: 3,
  name: "Hogwarts Sweater",
  price: "5.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/48619951_061_b.jpeg')

};

const product_four = {
  id: 4,
  name: "Brown Diamonds",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img4.jpeg')

};

const product_five = {
  id: 5,
  name: "Black Addidas Sweater",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img5.jpeg')

};

const product_six = {
  id: 6,
  name: "Cools Club Sweater",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img6.jpeg')

};

const product_seven = {
  id: 7,
  name: "Checker Diamond Sweater",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img7.jpeg')

};

const product_eight = {
  id: 8,
  name: "Amazon Sweater",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img8.jpeg')

};

const product_nine = {
  id: 9,
  name: "Green Rose Sweater",
  price: "2.99",
  description: "asdf jkl;",
  quantity: 1,
  image: require('./../assets/img9.jpeg')

};

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  addToCart = (event) => {
    event.preventDefault();
    this.props.addToCart(event);
  }

  render() {
    return(
      <React.Fragment>
        <Title title='Shop' />
        <div style={containerStyle} className={`container-fluid`}>
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to={{
                pathname: "./productpage",
                state: {
                  product: {...product_one}
                }
              }} >
                <img src={product_one.image} alt='rose_green' style={imageStyle} />
              </Link>
              <Product {...product_one} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to={{
                pathname: "./productpage",
                state: {
                  product: {...product_two}
                }
              }} >
                <img src={product_two.image} alt='rose_green' style={imageStyle} />
              </Link>
              <Product {...product_two} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to={{
                pathname: "./productpage",
                state: {
                  product: {...product_three}
                }
              }} >
                <img src={product_three.image} alt='hogwarts_sweater' style={imageStyle} />
              </Link>
              <Product {...product_three} addToCart={this.addToCart} /> 
            </div>
  
          </div>
  
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_four.image} alt='brown_sweater' style={imageStyle} />
              </Link>
              <Product {...product_four} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_five.image} alt='black_addidas_sweater' style={imageStyle} />
              </Link>
              <Product {...product_five} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_six.image} alt='cools_club_sweater' style={imageStyle} />
              </Link>
              <Product {...product_six} addToCart={this.addToCart} />
            </div>
  
          </div>
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_seven.image} alt='checker_diamond_sweater' style={imageStyle} />
              </Link>
              <Product {...product_seven} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_eight.image} alt='amazon_sweater' style={imageStyle} />
              </Link>
              <Product {...product_eight} addToCart={this.addToCart} />
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <Link to='./productpage' >
                <img src={product_nine.image} alt='green_rose_sweater' style={imageStyle} />
              </Link>
              <Product {...product_nine} addToCart={this.addToCart} />
            </div>
  
          </div>
        </div>
        <div>
        </div>
      </React.Fragment>
    );
  }
}

const textStyle = {
  textAlign: 'center'
}

const containerStyle = {
  background: '#bc0505',
  padding: '15px'
}

const imageStyle = {
  width: '70%',
  height: '350px',
  borderRadius: '25px',
  padding: '10px'
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart.itemID
});

export default connect(mapStateToProps, { addToCart })(Shop);