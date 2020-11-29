import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {Form, Col } from 'react-bootstrap';
import arrow from '../images/arrow.png';
import '../style1.css';
=======
import { Form, Col, Modal } from 'react-bootstrap';
>>>>>>> ce927937ff8557f46302063d27522c807ccc6bd6



class Login extends Component {
  state = {

  }

  render() {
    return (
<<<<<<< HEAD
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
=======

      <Form>
        <Form.Row>
          {/* רקע נהפך ללבן כשבוחרים */}
          <Form.Group as={Col} controlId="email">
            <Form.Control type="email" placeholder="מייל-שם משתמש" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="password">
            <Form.Control type="password" placeholder="סיסמא" />
          </Form.Group>
        </Form.Row>
      </Form>
>>>>>>> ce927937ff8557f46302063d27522c807ccc6bd6

    );
  }

} export default Login;