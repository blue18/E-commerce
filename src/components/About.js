import React, { Component } from 'react';
import Title from './Title';
import AboutForm from './aboutForm';
import { connect } from 'react-redux';
import { handleChange } from '../actions/promoCodeActions';


class About extends Component {

  handleChange(event) {
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
        <Title title='About' />
        <h1>Posts</h1>
        <AboutForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(About);