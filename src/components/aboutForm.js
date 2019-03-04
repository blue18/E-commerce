import React, { Component } from 'react';

class AboutForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) { 
    this.setState({[event.target.name]: [event.target.value]});
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    console.log(post);
  }

  render() {
    return (
      <div className={`container`}>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div style={formStyle}>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div style={formStyle}>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <div style={formStyle}>
            <button style={buttonStyle} type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '15px'
}
const buttonStyle = {
  margin: '0 auto'
}
export default AboutForm;