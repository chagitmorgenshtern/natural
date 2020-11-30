import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import arrow from '../images/arrow.png';

import { Form, Col, Modal, Button } from 'react-bootstrap';



class Login extends Component {
  state = {

  }

  // onChangehandler(e) {
  // onChange={(e) => { onChangehandler(e) }}
  // }

  render() {
    return (
     
      

      <Form  className="login">
        <center><h2 className="headerLogIn" >כניסה</h2> </center>
        {/* <Form.Group as={Col} controlId="email">
          <Form.Control id="email" type="mail" placeholder="מייל-שם משתמש" />
        </Form.Group> */}

        <Form.Group key={1} as={Col} controlId="emailFromLogIn">
          <Form.Control key={2} type="email" placeholder="כתובת מייל" />
        </Form.Group>

        <Form.Control id="passwordFromLogIn" type="password" placeholder="סיסמא" />
        <Button variant="light" type="submit">כניסה</Button> <img src={arrow} id="arrowFromLogIn"/>

        {/* רקע נהפך ללבן כשבוחרים  */}
        {/* <Form.Row>
          
          <Form.Group as={Col} controlId="email">
            <Form.Control onChange = {(e)=>{onChangehandler(e)}} type="email" placeholder="מייל-שם משתמש" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="password">
            <Form.Control type="password" placeholder="סיסמא" />
          </Form.Group>
        </Form.Row>
        */}

      </Form>

    );
  }

} export default Login;