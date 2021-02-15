import React, { Component } from 'react';
import "./patientArea.css"
import { Button, Row, Form, Modal } from 'react-bootstrap';
import UpdateForm from './updateForm';
import axios from '../../axios'

export default class PatientArea extends Component {

    state = {
        displayUpdateForm: false,
        displayFeedback: false,
        allMeets: [],
        patient: {
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
    componentDidMount() {
        //הצגת נתוני המטופל לפי הפרופס שנשלחו
        // const p_details= {...this.props.patient};
        // this.setState({patient:p_details})
        //בלי העתקה עמוקה!!!!!!!!!!
        // this.setState({patient:this.props.patient})

        axios.get('Meets/GetAll')
            .then(res => {
                console.log(res);
                this.setState({ therapistsAll: [...res.data] });
            });
    }
    //TODO check if works********************************************************************************************************
    updateDetails = () => {
        this.setState({ displayUpdateForm: true });
    }

    feedback = () => {
        this.setState({ displayFeedback: true });
    }

    render() {


        return (
            <div>
                <div id="p-details-card">
                    <label className="p-label">שם מלא</label>
                    <label className="p-label">ת.ז.:</label>
                    <label className="p-label">תאריך לידה:</label>
                    <label className="p-label">מייל:</label>
                    <label className="p-label">טלפון:</label>
                    <label className="p-label">טלפון נוסף:</label>
                    {/* <Row> */}
                    <Button onClick={() => this.updateDetails()} size="sm" variant="info" id="update_btn" className="hvr-curl-bottom-left">עדכון פרטים</Button>
                    {/* </Row> */}
                </div>
                <button onClick={this.feedback}>דרג אותי!</button>
                <div className="meets_table">

                </div>

                <Modal id="modal_feedback" centered show={this.state.displayFeedback} onHide={() => { this.setState({ displayFeedback: false }); }}>
                    <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw' }} >
                        <Modal.Title>דירוג המטפל</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw', height: '45vh' }}>

                        <Form>
                            <Form.Group controlId="formBasicRangeCustom">
                                <input type="range" min="0" max="5" step="1" onChange={(event) => { alert(event.target.value) }} />
                                <Form.Label>מקצועיות</Form.Label>
                                <Form.Control type="range" custom id="range1" min="0" max="5" step="1" />
                                <Form.Label>שירות</Form.Label>
                                <Form.Control type="range" custom id="range2" />
                                <Form.Label>מחיר</Form.Label>
                                <Form.Control type="range" custom id="range3" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal id="modal_signup" centered show={this.state.displayUpdateForm} onHide={() => { this.setState({ displayUpdateForm: false }); }} >
                    <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw' }} >
                        <Modal.Title>עדכון פרטים</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw', height: '45vh' }}>
                        <UpdateForm />
                    </Modal.Body>
                </Modal>
            </div>

        );
    }
}