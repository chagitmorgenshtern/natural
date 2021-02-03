import React, { Component } from 'react';
import axios from '../../axios'
import { Form, Col } from 'react-bootstrap';
import arrow from '../../images/arrow.png'
import { Link } from 'react-router-dom';

class SignupTh_full extends Component {
    state = {
        therapist: {//לא צריך להתשמש במזהה בטופס נכון?
            FirstName: "",
            LastName: "",
            TherapistTz: "",
            DateOfBirth: "",
            PhoneNumber: "",
            Email: "",
            Password: "",
            Image: "",
            ServiceAreaId: "",
            Address: ""
        }

    }


    inputChange = (event) => {
        debugger;
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        let value;

        if (id == "ServiceAreaId")
            value = event.target.selectedOptions[0].id;
        else
            value = event.target.value;
        newperson[id] = value;
        this.setState({ patient: newperson });

    }

    //TODO
    register = () => {
        alert("hello");
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
            <Form className="signup" onSubmit={this.register}>
                <Form.Row>
                    <Form.Group as={Col}  >
                        <Form.Control placeholder="שם פרטי" className="inputs" id="FirstName" value={this.state.FirstName} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />

                        </Form.Group> */}

                    <Form.Group as={Col} >
                        <Form.Control placeholder="שם משפחה" className="inputs" id="LastName" value={this.state.LastName} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control placeholder=".ת.ז" className="inputs" id="TherapistTz" value={this.state.TherapistTz} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Control type="date" placeholder="תאריך לידה" className="inputs" id="DateOfBirth" value={this.state.DateOfBirth} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control type="Phone" placeholder="טלפון" className="inputs" id="PhoneNumber" value={this.state.PhoneNumber} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group key={3} as={Col}>
                        <Form.Control key={4} type="email" placeholder="כתובת מייל" className="inputs" id="Email" value={this.state.Email} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group key={3} as={Col}>
                        <Form.Control className="inputs" id="ServiceAreaId" as="select" custom value={this.state.ServiceAreaId} onChange={(event) => this.inputChange(event)}>
                            <option id="0">הכל</option>
                            <option id="1">הכל</option>
                            <option id="2">הכל</option>
                            <option id="3">הכל</option>
                            {/* {categoriesList} */}

                        </Form.Control>
                    </Form.Group>

                    <Form.Group key={3} as={Col}>
                        <Form.Control key={4} type="text" placeholder="כתובת הקליניקה- עיר, רחוב, מספר בית, כניסה" className="inputs" id="Address" value={this.state.Address} onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                </Form.Row>


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


} export default SignupTh_full;