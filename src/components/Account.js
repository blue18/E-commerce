import React, { Component } from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      phonenumber: 0,
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <Container>
        <h1>Create Account</h1>
        <Form style={formContent}>
          <FormGroup row>
            <Label for="firstname" sm={{ size: 2, offset: 3}}>First Name</Label>
            <Col sm={4}>
              <Input type="text" name="firstname" id="firstname" placeholder="John" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastname" sm={{ size: 2, offset: 3}}>Last Name</Label>
            <Col sm={4}>
              <Input type="lastname" name="lastname" id="lastname" placeholder="Doe" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={{ size: 2, offset: 3}}>Email</Label>
            <Col sm={4}>
              <Input type="email" name="email" id="email" placeholder="someone@gmail.com" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phonenumber" sm={{ size: 2, offset: 3}}>Phone Number</Label>
            <Col sm={4}>
              <Input type="phonenumber" name="phonenumber" id="phonenumber" placeholder="1234567890" />
            </Col>
          </FormGroup>
          <FormGroup check row>
          <Col sm={{ size: 7, offset: 5 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
        </Form>
      </Container>
    );
  }
}

const formContent = {
  padding: "15px 0px 15px 0px"
}

export default Account;