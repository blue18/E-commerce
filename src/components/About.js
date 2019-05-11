import React, { Component } from 'react';
import Title from './Title';
import AboutForm from './aboutForm';

class About extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/")
    .then(res => res.json())
    .then(data => {
      let users = data.map(user => {
        return(
          <div key={user.id}>
            <p>{user.firstName}</p>
          </div>
        );
      })
      this.setState({ users: users})
    })
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <Title title='About' />
        <AboutForm />
        <div>{this.state.users}</div>
      </div>
    );
  }
}

export default About;
