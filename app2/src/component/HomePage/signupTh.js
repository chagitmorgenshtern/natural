import React, { Component } from 'react';
import '../../style.css'
import axios from '../../axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import backg from '../../images/background01.jpg'
import { Form, Col, Button, Row, Container, InputGroup } from 'react-bootstrap';
import MyNavbar from '../navbar';

class SignupTh extends Component {

  state = {
    applicant: {
      FirstName: "",
      LastName: "",
      TherapistTz: "",
      Email: ""
    },
    filePath: ""
  }

  inputChange = (event) => {
    debugger;
    let id = event.target.id;
    //TODO check how get the file path================================================================================================
    //and how to sent this path to the api============================================================================================
    if (id == "file") {
      this.setState({ filePath: event.target.files[0] });
    }

    else {

      if (id == "EmailTh")
        id = "Email";

      const newperson = { ...this.state.applicant };
      newperson[id] = event.target.value;
      this.setState({ applicant: newperson });
    }
  }

  sendMailDetails() {
    debugger;
    const newA = { ...this.state.applicant };
    axios.post('applicants/AddApplicant', newA).then(res => { debugger; alert(res.data) });


  }

  render() {
    return (
      <div className="signupTh">
        {/* <MyNavbar /> */}
        <center><h2 className="headerSignUpTh" > הגשת מועמדות למטפל</h2>
          <h className="textSignUpTh">אנא מלא פרטיך האישיים ע"מ שנוכל ליצור איתך קשר:</h>
        </center>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="first_nameFromsignupTh">
              <Form.Control type="name" className="inputsTh" id="FirstName" placeholder="שם פרטי" style={{ marginTop: '7%' }} onChange={(event) => this.inputChange(event)} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="last_nameFromsignupTh">
              <Form.Control type="name" className="inputsTh" id="LastName" placeholder="שם משפחה" onChange={(event) => this.inputChange(event)} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="id_nameFromsignupTh">
              <Form.Control type="id" className="inputsTh" id="TherapistTz" placeholder="תעודת זהות " onChange={(event) => this.inputChange(event)} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {/* לשים לב שהאיי די הוא לא אימייל!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! אלא עם תי הייג */}
            <Form.Group as={Col} controlId="email_nameFromsignupTh">
              <Form.Control type="email" className="inputsTh" id="EmailTh" placeholder="כתובת מייל " style={{ marginRight: '20% !important' }} onChange={(event) => this.inputChange(event)} />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label id="cv_label_nameFromsignupTh">אנא צרף קובץ קורות חיים</Form.Label>
            <Form.File className="inputsTh" id="file" onChange={(event) => this.inputChange(event)} />
          </Form.Group>
          <Button variant="info" onClick={() => this.sendMailDetails()} >אישור</Button>{' '}


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