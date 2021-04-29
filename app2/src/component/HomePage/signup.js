import React, { Component } from 'react';
import axios from '../../axios'
import { Form, Col } from 'react-bootstrap';
import arrow from '../../images/arrow.png'
import { Link } from 'react-router-dom';

class Signup extends Component {
    state = {
        patient: {
            //לא צריך להתשמש במזהה בטופס נכון?
            // PatientId: "",
            Firstname: "",
            Lastname: "",
            PatientTz: "",
            DateOfBirth: "",
            Email: "",
            Password: "",
            PhoneNumber1: "",
            PhoneNumber2: ""
        },
        error: ""

    }


    inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;
        this.setState({ patient: newperson });

    }

    register = () => {

        const newP = { ...this.state.patient };
        // debugger;
        // alert(this.state.patient.Firstname + " " + this.state.patient.Email);
        // alert(newP.Firstname + "  " + newP.Email)
        axios.post('patients/Register', newP).then(res => {
            alert(res.data);
            this.setState({
                error: ""
            });
            //localStorage.setItem("user", JSON.stringify(res.data))
        }).catch(e => {
            alert("fsdfsds");
            console.log("jhgjgh"); debugger; this.setState({ error: e.data })
        });

        // JSON.parse( localStorage.getItem("user")) ;


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
        if (this.state.error != "")
            var e = <p style={{ color: 'red', fontWeight: 'bold' }}>{this.state.error}</p>
        return (

            // <div >
            /* <form> */
            /* <h2 className="headerSignUp" >הרשמת מטופל</h2>
             onSubmit={this.register}*/
            <Form className="signup" >
                <Form.Row>
                    <Form.Group as={Col}  >
                        <Form.Control placeholder="שם פרטי" className="inputs" id="Firstname" value={this.state.Firstname} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />

                        </Form.Group> */}

                    <Form.Group as={Col} >
                        <Form.Control placeholder="שם משפחה" className="inputs" id="Lastname" value={this.state.Lastname} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control placeholder=".ת.ז" className="inputs" id="PatientTz" value={this.state.PatientTz} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Control type="date" placeholder="תאריך לידה" className="inputs" id="DateOfBirth" value={this.state.DateOfBirth} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="Phone" placeholder="טלפון" className="inputs" id="PhoneNumber1" value={this.state.PhoneNumber1} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="טלפון נוסף" className="inputs" id="PhoneNumber2" value={this.state.PhoneNumber2} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group key={3} as={Col}>
                        <Form.Control key={4} type="email" placeholder="כתובת מייל" className="inputs" id="Email" value={this.state.Email} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                {/* </Form> */}

                <Form.Row>
                    <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                </Form.Row>

                {/* <Form> */}
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Control type="password" placeholder="סיסמא" className="inputs" id="Password" value={this.state.Password} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="password" className="inputs" id="confirm_password" placeholder="אימות סיסמא " />
                    </Form.Group>


                    {/* type="submit"  */}
                    <Form.Group as={Col}>
                        <Link onClick={() => { this.register() }}><img src={arrow} id="arrow" /></Link>
                    </Form.Group>
                </Form.Row>
            </Form>


        );
    }//render


} export default Signup;