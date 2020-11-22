import React, { Component } from 'react';
import axios from '../axios'
import { Form, Col, Button } from 'react-bootstrap';
import arrow from '../images/arrow.png'

class Signup extends Component {
    state = {
        patient: {//לא צריך להתשמש במזהה בטופס נכון?
            PatientId: "",
            Firstname: "",
            Lastname: "",
            PatientTz: "",
            DateOfBirth: "",
            Email: "",
            Password: "",
            PhoneNumber1: "",
            PhoneNumber2: ""
        }

    }
    render() {
        return (

            <div className="signup">
                {/* <form> */}
                <h2 className="headerSignUp" >הרשמת מטופל</h2>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="last_name">
                            <Form.Control placeholder="שם משפחה" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="id">
                            <Form.Control placeholder=".ת.ז" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="date">
                            <Form.Control type="date" placeholder="תאריך לידה" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="Phone1">
                            <Form.Control type="Phone" placeholder="טלפון" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Phone2">
                            <Form.Control placeholder="טלפון נוסף" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group key={3} as={Col} controlId="email">
                            <Form.Control key={4} type="mail" placeholder="כתובת מייל" />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="password">
                            <Form.Control type="password" placeholder="סיסמא" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="confirm_password">
                            <Form.Control type="password" placeholder="אימות סיסמא " />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <img src={arrow} id="arrow" />
            </div>
        );
    }//render


    inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;

        this.setState({ pateint: newperson });

    }

    newPateintHandler = (patient) => {
        debugger;
        alert(this.state.patient.Password.value)
        if (document.getElementById("Valid-Password").value === patient.Password)
            axios.post('patient/Register', patient).then(x => { console.log("succes!" + x) });
        else {
            patient.Password = "";
            document.getElementById("Password").value = "";
            document.getElementById("Valid-Password").value = "";
            alert("not valid");
        }
    }


} export default Signup;