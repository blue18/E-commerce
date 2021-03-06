import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <Link style={linkStyle} to='/'> Home </Link>
        <Link style={linkStyle} to='/shop'> Shop </Link>
        <Link style={linkStyle} to='/about'> About </Link>
        <Link style={linkStyle} to='/cart'> Cart </Link>
        <Link style={linkStyle} to='/account'> Account </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  background: 'black',
  padding: '10px'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'red',
  fontSize: "25px",
  padding: "15px"
}

export default Header;