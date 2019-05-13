import React, { Component } from 'react';
import Title from './Title';

class About extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000")
    .then(res => res.json())
    .then(data => {
      let users = data.map(user => {
        return(
          <div style={dataStyle} key={user.id}>
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
        <div>{this.state.users}</div>
      </div>
    );
  }
}

const dataStyle = {
  display: "flex",
  justifyContent: "center"
}

export default About;
