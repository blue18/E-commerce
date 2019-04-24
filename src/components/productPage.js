import React from 'react';
import Title from './Title';
import { Container, Row, Col } from 'reactstrap';

const ProductPage = (props) => {

  let { name } = props.location.state.product;
  let { price } = props.location.state.product;
  let { description } = props.location.state.product;
  let { quantity } = props.location.state.product;
  let { image } = props.location.state.product;

  return(
    <div>
      <Title title={name} /> 
      <Container>
        <Row style={textStyle}>
          <Col sm="3"></Col>
          <Col sm="6">
            <div><img src={image} alt={name}/></div>
            <div>${price}</div>
            <div>{description}</div>
            <div>{quantity}</div>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    </div>
  );
}

const textStyle = {
  textAlign: 'center'
}


export default ProductPage