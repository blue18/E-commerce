import React, { Component } from 'react';

const Footer = () => {
  return(
    <div>
      <footer style={footerStyle}>
        <p>Footer</p>
      </footer>
    </div>
  );
}

const footerStyle = {
  backgroundColor: '#bc0505',
  textAlign: 'center',
  padding: '10px'
}

export default Footer;