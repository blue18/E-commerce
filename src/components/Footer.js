import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return(
    <div>
      <footer style={footerStyle}>
      <div className={`container-fluid`}>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>Copyright © 2019</Col>
          <Col md={4}></Col>
        </Row>
      </div>
      </footer>
    </div>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: 'black',
  color: 'red'
}

export default Footer;
