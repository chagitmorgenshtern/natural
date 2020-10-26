import React, { Component } from 'react';
import '../style.css'
import axios from '../axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Row, Container, InputGroup } from 'react-bootstrap';

class SignupTh extends Component {



    render() {
        return (
            <div className="signup">
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} controlId="FirstName">
                            <Form.Control placeholder="שם פרטי" />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        {/* <Form.Label>Address</Form.Label> */}
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />

                            <Form.Group as={Col} controlId="LasttName">
                                <Form.Control placeholder="שם משפחה" />

                            </Form.Group>
                            <Form.Group as={Col} controlId="Id">
                                <Form.Control placeholder="ת.ז" />
                            </Form.Group>
                    </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="Phone">
                                <Form.Control placeholder="פלאפון" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="Phone2">
                                <Form.Control placeholder=" פלאפון נוסף (לא חובה)" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="BornDate">
                                <Form.Control type="date" />
                            </Form.Group>
                        </Form.Row>
                        <InputGroup><Form.Control type="email" placeholder="כתובת מייל" /></InputGroup>
                        {/* <Form.row> </Form.row> */}
                        <Button variant="primary" type="submit">

                            Submit
  </Button>
                </Form></div>
        );
    }

}
export default SignupTh;