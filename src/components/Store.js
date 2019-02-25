import React from 'react';
import Title from './Title';

import Image1 from './../assets/50995950_040_b.jpeg';
import Image2 from './../assets/48582498_031_b.jpeg';
import Image3 from './../assets/48619951_061_b.jpeg';

import Image4 from './../assets/img4.jpeg';
import Image5 from './../assets/img5.jpeg';
import Image6 from './../assets/img6.jpeg';

import Image7 from './../assets/img7.jpeg';
import Image8 from './../assets/img8.jpeg';
import Image9 from './../assets/img9.jpeg';

class Store extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  addToCart = (event) => {
    const newItem = event.target.name;
    let cart = this.props.cart;
    cart.push(newItem);
    console.log(cart);
  }

  render() {
    return(
      <React.Fragment>
        <Title title='Store' />
        <div style={containerStyle} className={`Container`}>
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image1} alt='blue_sweater' style={imageStyle} onClick={this.handleClick} />
              <div>Blue Sweater</div>
              <div>Price: 3.99</div>
              <button name='blue_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image2} alt='rose_green' style={imageStyle} />
              <div>Rose Green</div>
              <div>Price: 4.99</div>
              <button name='rose_green' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image3} alt='hogwarts_sweater' style={imageStyle} />
              <div>Hogwarts Sweater</div>
              <div>Price: 5.99</div>
              <button name='hogwarts_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
          </div>
  
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image4} alt='brown_sweater' style={imageStyle} />
              <div>Brown Sweater</div>
              <div>Price: 3.99</div>
              <button name='brown_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image5} alt='black_addidas_sweater' style={imageStyle} />
              <div>Black Addidas Sweater</div>
              <div>Price: 4.99</div>
              <button name='black_addidas_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image6} alt='cools_club_sweater' style={imageStyle} />
              <div>Cools Club Sweater</div>
              <div>Price: 5.99</div>
              <button name='cools_club_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
          </div>
          <div className={`row`}>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image7} alt='checker_diamond_sweater' style={imageStyle} />
              <div>Checker Diamond Sweater</div>
              <div>Price: 3.99</div>
              <button name='checker_diamond_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image8} alt='amazon_sweater' style={imageStyle} />
              <div>Amazon Sweater</div>
              <div>Price: 4.99</div>
              <button name='amazon_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
            <div style={textStyle} className={`col-sm-4`}>
              <img src={Image9} alt='green_rose_sweater' style={imageStyle} />
              <div>Green Rose Sweater</div>
              <div>Price: 5.99</div>
              <button name='green_rose_sweater' onClick={this.addToCart}>Add</button>
            </div>
  
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const textStyle = {
  textAlign: 'center'
}

const containerStyle = {
  background: '#bc0505'
}

const imageStyle = {
  width: '70%',
  height: '350px',
  borderRadius: '25px',
  padding: '10px'
}

export default Store;