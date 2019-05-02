import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Comproduct = (props) => {

  const product = props;

  return(
    <div>
      <Link to={{
        pathname: "./productpage",
        state: {
          product: {...product}
        }
      }} >
        <img src={product.image} alt={product.name} style={imageStyle} />
      </Link>
      <Product {...product} />
    </div>
  );
}

const imageStyle = {
  width: '100%',
  height: '450px',
  borderRadius: '25px',
  padding: '10px'
}

export default Comproduct;