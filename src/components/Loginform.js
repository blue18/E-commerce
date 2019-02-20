import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(`
      username: ${this.state.username}
      username: ${this.state.password}
    `);
  }

  render() {
    return(
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleOnSubmit}>
          <div className="username">
            <label>
              Username
            </label>
            <input 
              name="username" 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Username"  />
          </div>
          <div className="password">
            <label>
              Password
            </label>
            <input 
              name="password" 
              type="password" 
              onChange={this.handleInputChange}
              placeholder="Password" />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;