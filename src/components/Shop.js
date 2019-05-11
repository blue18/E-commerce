import React from 'react';
import Title from './Title';
import Comproduct from './Comproduct';
import PageSkipper from './PageSkipper';
import { Container, Col, Row } from 'reactstrap';

/*
  add products here for testing purposes 
*/

const product_one = {
  id: 1,
  name: "Blue Sweater",
  price: "3.99",
  description: "beautiful blue sweater",
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
        <Container style={containerStyle} fluid>

          <Row>
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_one} />
            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_two}/>
            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_three} />
            </Col>

          </Row>
  
          <Row>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_four} />
            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_five} />
            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_six} />
            </Col>
  
          </Row>

          <Row>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_seven} />

            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_eight} />
            </Col>
  
            <Col xs="6" sm="4" style={textStyle}>
              <Comproduct {...product_nine}  />
            </Col>
  
          </Row>
          
          <Row>
            <PageSkipper />
          </Row>

        </Container>

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

export default Shop;
