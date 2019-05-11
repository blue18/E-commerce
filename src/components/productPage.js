import React, { Component } from 'react';
import Title from './Title';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingCartActions';

class ProductPage extends Component {

  constructor(props) {
    super(props);

    this.showPopUp = this.showPopUp.bind(this);
  }

  showPopUp() {
    console.log("line 16");
  }

  addToCart = (event) => {
    event.preventDefault();
    this.props.addToCart(event);
  }

  render() {
    
    let product = this.props.location.state.product;

    return(
      <div>
        <Title title={product.name} /> 
        <Container fluid>
          <Row style={textStyle}>
            <Col sm="3"></Col>
            <Col sm="6">
              <div><img src={product.image} alt={product.name}/></div>
              <div>${product.price}</div>
              <div>{product.description}</div>
              <div>{product.quantity}</div>
              <Button color="danger" size="lg" {...product} onClick={this.addToCart} block>Add to Cart</Button>
            </Col>
            <Col sm="3">
              <div style={centerButtons}>
                <Button color="primary">Small</Button>{"   "}
                <Button color="primary">Medium</Button>{"   "}
                <Button color="primary">Large</Button>{"   "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const centerButtons = {
  paddingTop: "15px"
}

const textStyle = {
  textAlign: "center",
  backgroundColor: "white"
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart.itemID
});

export default connect(mapStateToProps, { addToCart })(ProductPage);
