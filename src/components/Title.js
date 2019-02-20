import React from 'react';

const Title = (props) => {
  return(
    <div style={titleStyle}>
      <h1>{props.title}</h1>
    </div>
  );
}

const titleStyle = {
  background: '#bc0505',
  padding: '15px'
}

export default Title;