import React from 'react';
import Title from './Title';
import { Container } from 'reactstrap';

const productPage = (props) => {

  let { name } = props.location.state.product;
  let { price } = props.location.state.product;
  let { description } = props.location.state.product;
  let { quantity } = props.location.state.product;
  let { image } = props.location.state.product;

  return(
    <div>
      <Title title={name} /> 
      <Container>
        <div>{price}</div>
        <div>{description}</div>
        <div>{quantity}</div>
        <div><img src={image} /></div>
      </Container>

    </div>
  );
}

export default productPage