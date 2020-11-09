import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col } from 'react-bootstrap';



class Login extends Component {
  state = {

  }

  render() {
    return (
      <div className="login">  
      <Form>
      <Form.Row>
          <Form.Group as={Col} controlId="email">
              <Form.Control placeholder="מייל-שם משתמש"  />
          </Form.Group>
          <Form.Group as={Col} controlId="password">
            <Form.Control placeholder="סיסמא" />
              </Form.Group>
       </Form.Row>
      </Form>
      </div>

     
    );
  }

} export default Login;