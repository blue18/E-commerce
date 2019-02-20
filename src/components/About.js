import React from 'react';
import Title from './Title';

const About = () => {
  return(
    <div>
      <Title title='About' />
      <div style={aboutStyle}>
        <p>This is an online sweater store. We have exclusive sweaters that are handmade my suppliers from all over the world. </p>
      </div>
    </div>
  );
}

const aboutStyle = {
  textAlign: 'center'
}

export default About;
