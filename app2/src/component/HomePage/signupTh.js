import React, { Component } from 'react';
import '../../style.css'
import axios from '../../axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import backg from '../../images/background01.jpg'
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
            <Form.Label id="cv_label_nameFromsignupTh">אנא צרף קובץ קורות חיים</Form.Label>
            <Form.File id="file" />
          </Form.Group>
          <Button variant="info" type="submit">אישור</Button>{' '}


        </Form>

        {/* <Modal centered show={this.state.displayModal} onHide={() => { this.setState({ displaySignup: false }); }} >
         
          <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw' }} closeButton>
            <Modal.Title>הרשמה</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw', height: '65vh' }}>
            <Signup />
          </Modal.Body>
        </Modal> */}

      </div>);

  }

}
export default SignupTh;