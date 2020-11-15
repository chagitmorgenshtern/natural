import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Modal } from 'react-bootstrap';



class Login extends Component {
  state = {

  }

  render() {
    return (

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

    );
  }

} export default Login;