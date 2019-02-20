import React from 'react';
import LoginForm from './Loginform';
import Title from './Title';

const Home = () => {
  return(
    <React.Fragment>
      <Title title='Home' />
      <LoginForm />
    </React.Fragment>
  );
}

export default Home;