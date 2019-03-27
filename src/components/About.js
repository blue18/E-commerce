import React, { Component } from 'react';
import Title from './Title';
import AboutForm from './aboutForm';

class About extends Component {

  render() {
    return (
      <div>
        <Title title='About' />
        <AboutForm />
      </div>
    );
  }
}

export default About;