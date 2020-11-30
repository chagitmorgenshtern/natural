import React, { Component } from 'react';
import '../../style.css'
import axios from '../../axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Row, Container, InputGroup } from 'react-bootstrap';

class SignupTh extends Component {

  render() {
    return (
      <div className="signupTh">
        <center><h2 className="headerSignUpTh" > הגשת מועמדות למטפל</h2>
          <h className="textSignUpTh">אנא מלא פרטיך האישיים ע"מ שנוכל ליצור איתך קשר:</h>
        </center>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="first_nameFromsignupTh">
              <Form.Control type="name" placeholder="שם פרטי" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="last_nameFromsignupTh">
              <Form.Control type="name" placeholder="שם משפחה" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="id_nameFromsignupTh">
              <Form.Control type="id" placeholder="תעודת זהות " />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="email_nameFromsignupTh">
              <Form.Control type="Email" placeholder="כתובת מייל " />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.File id="file" />
          </Form.Group>
          <Button variant="info">אישור</Button>{' '}


        </Form>
      </div>);

  }

}
export default SignupTh;