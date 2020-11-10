import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Col } from 'react-bootstrap';
import arrow from '../images/arrow.png';
import '../style1.css';



class Login extends Component {
  state = {

  }

  render() {
    return (
      <div className="login">  
      <center><h2 className="headerLogIn" >כניסה</h2> </center>
      <Form>
      <Form.Row>
          <Form.Group as={Col} controlId="emailFromLogIn">
              <Form.Control type="Email" placeholder="שם משתמש"  />
          </Form.Group>
          <Form.Group as={Col} controlId="passwordFromLogIn" >
            <Form.Control type="password" placeholder="סיסמא" />
              </Form.Group>
       </Form.Row>
      </Form>
      <img src={arrow} id="arrowFromLogIn"/>
      </div>

     
    );
  }

} export default Login;