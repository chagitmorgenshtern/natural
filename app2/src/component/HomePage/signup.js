import React, { Component } from 'react';
import axios from '../../axios'
import { Form, Col } from 'react-bootstrap';
import arrow from '../../images/arrow.png'

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


    inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;
        this.setState({ pateint: newperson });

    }

    newPateintHandler = () => {
        const newP = { ...this.state.patient };
        debugger;
        alert(this.state.patient.Firstname + " " + this.state.patient.Email);
        alert(newP.Firstname + "  " + newP.Email)
        axios.post('patients/Register', newP).then(res => { alert(res.data) });


        // if (document.getElementById("Valid-Password").value === patient.Password)
        //     axios.post('patient/Register', patient).then(x => { console.log("succes!" + x) });
        // else {
        //     patient.Password = "";
        //     document.getElementById("Password").value = "";
        //     document.getElementById("Valid-Password").value = "";
        //     alert("not valid");
        // }

    }


    render() {
        return (

            // <div >
            /* <form> */
            /* <h2 className="headerSignUp" >הרשמת מטופל</h2> */
            <Form className="signup" onSubmit={this.newPateintHandler}>
                <Form.Row>
                    <Form.Group as={Col} controlId="first_name" >
                        <Form.Control placeholder="שם פרטי" id="Firstname" value={this.state.Firstname} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />

                        </Form.Group> */}

                    <Form.Group as={Col} controlId="last_name">
                        <Form.Control placeholder="שם משפחה" id="Lastname" value={this.state.Lastname} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="id">
                        <Form.Control placeholder=".ת.ז" id="PatientTz" value={this.state.PatientTz} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="date">
                        <Form.Control type="date" placeholder="תאריך לידה" id="DateOfBirth" value={this.state.DateOfBirth} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="Phone1">
                        <Form.Control type="Phone" placeholder="טלפון" id="PhoneNumber1" value={this.state.PhoneNumber1} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Phone2">
                        <Form.Control placeholder="טלפון נוסף" id="PhoneNumber2" value={this.state.PhoneNumber2} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group key={3} as={Col} controlId="email">
                        <Form.Control key={4} type="email" placeholder="כתובת מייל" id="Email" value={this.state.Email} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                {/* </Form> */}

                <Form.Row>
                    <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                </Form.Row>

                {/* <Form> */}
                <Form.Row>
                    <Form.Group as={Col} controlId="password">
                        <Form.Control type="password" placeholder="סיסמא" id="Password" value={this.state.Password} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="confirm_password">
                        <Form.Control type="password" placeholder="אימות סיסמא " />
                    </Form.Group>

                    <Form.Group >
                        <img src={arrow} id="arrow" type="submit" onClick={this.newPateintHandler} />
                    </Form.Group>
                </Form.Row>
            </Form>


        );
    }//render


} export default Signup;