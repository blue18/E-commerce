import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: { 
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "firstname": this.state.firstname,
        "lastname" : this.state.lastname,
        "phonenumber": this.state.phonenumber,
        "email": this.state.email
      })
    })
    .then(res => res.json())
    .catch(err => console.error(err));
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <h1>Create Account</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form style={formContent} onSubmit={this.handleSubmit}> 
              <FormGroup row>
                <Label for="firstname" sm={{ size: 2, offset: 3}}>First Name</Label>
                <Col sm={4}>
                  <Input type="text" name="firstname" id="firstname" placeholder="John" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="lastname" sm={{ size: 2, offset: 3}}>Last Name</Label>
                <Col sm={4}>
                  <Input type="lastname" name="lastname" id="lastname" placeholder="Doe" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="email" sm={{ size: 2, offset: 3}}>Email</Label>
                <Col sm={4}>
                  <Input type="email" name="email" id="email" placeholder="someone@gmail.com" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="phonenumber" sm={{ size: 2, offset: 3}}>Phone Number</Label>
                <Col sm={4}>
                  <Input type="phonenumber" name="phonenumber" id="phonenumber" placeholder="1234567890" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup check row>
              <Col sm={{ size: 7, offset: 5 }}>
                <Button color="success">Submit</Button>
              </Col>
            </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    );
  }
}

const formContent = {
  padding: "15px 0px 15px 0px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export default Account;