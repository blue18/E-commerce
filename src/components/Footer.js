import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return(
    <div>
      <footer style={footerStyle}>
        <Row>
          <Col md={6}>Copyright</Col>
          <Col md={6}>2019</Col>
        </Row>
      </footer>
    </div>
  );
}

const footerStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '10px',
  color: 'red'
}

export default Footer;