import React from 'react';
import Title from './Title';

import Image1 from './../assets/50995950_040_b.jpeg';
import Image2 from './../assets/48582498_031_b.jpeg';
import Image3 from './../assets/48619951_061_b.jpeg';

import Image4 from './../assets/img4.jpeg';
import Image5 from './../assets/img5.jpeg';
import Image6 from './../assets/img6.jpeg';

import Image7 from './../assets/img7.jpeg';
import Image8 from './../assets/img8.jpeg';
import Image9 from './../assets/img9.jpeg';

const Store = () => {

  const handleClick = (e) => {
    e.preventDefault();
    const result = window.open();
  }

  return(
    <React.Fragment>
      <Title title='Store' />
      <div style={containerStyle} className={`Container`}>
        <div className={`row`}>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image1} style={imageStyle} onClick={handleClick} />
            <div>Blue Sweater</div>
            <div>Price: 3.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image2} style={imageStyle} />
            <div>Rose Green</div>
            <div>Price: 4.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image3} style={imageStyle} />
            <div>Hogwarts Sweater</div>
            <div>Price: 5.99</div>
            <button>Add</button>
          </div>

        </div>
        <div className={`row`}>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image4} style={imageStyle} />
            <div>Brown Sweater</div>
            <div>Price: 3.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image5} style={imageStyle} />
            <div>Black Addidas Sweater</div>
            <div>Price: 4.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image6} style={imageStyle} />
            <div>Cools Club Sweater</div>
            <div>Price: 5.99</div>
            <button>Add</button>
          </div>

        </div>
        <div className={`row`}>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image7} style={imageStyle} />
            <div>Checker Diamond Sweater</div>
            <div>Price: 3.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image8} style={imageStyle} />
            <div>Amazon Sweater</div>
            <div>Price: 4.99</div>
            <button>Add</button>
          </div>

          <div style={textStyle} className={`col-sm-4`}>
            <img src={Image9} style={imageStyle} />
            <div>Green Rose Sweater</div>
            <div>Price: 5.99</div>
            <button>Add</button>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

const textStyle = {
  textAlign: 'center'
}

const containerStyle = {
  background: '#bc0505'
}

const imageStyle = {
  width: '70%',
  height: '350px',
  borderRadius: '25px'
}

export default Store;