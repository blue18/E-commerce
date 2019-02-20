import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <Link style={linkStyle} to='/'> Home </Link>
        <Link style={linkStyle} to='/store'> Store </Link>
        <Link style={linkStyle} to='/about'> About </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  fontWeight: 'lighter',
  background: 'black',
  padding: '10px'
}

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'lighter',
  color: 'red'

}

export default Header;