import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return(
    <div>
      <footer style={footerStyle}>
      <div className={`container-fluid`}>
        <Row>
          <Col md={6}>Copyright</Col>
          <Col md={6}>2019</Col>
        </Row>
      </div>
      </footer>
    </div>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  color: 'black'
}

export default Footer;