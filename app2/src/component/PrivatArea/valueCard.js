import React, { Component } from 'react';
import { Button, Row, Form, Modal } from 'react-bootstrap';
export default class ValueCard extends Component {

    state = {
        displayFeedback: false,
        displayCancel: false
    }

    addTherapist = () => {
        //TODO
        //update applicant status
    }

    deleteMeeting(event) {
        //TODO
    }


    render() {
        const status = this.props.profileStatus;
        return (
            <div className="meetCard hvr-grow">
                <label className="text">{this.props.entry1}</label>
                <label className="text">{this.props.entry2}</label>
                <label className="text">{this.props.entry3}</label>
                {(status === "patient") ?
                    <div>
                        <button className="hvr-pulse-grow" id="btn_pa_cancel" onClick={() => { this.setState({ displayCancel: true }) }}>בטל פגישה</button>
                        <button className="hvr-pulse-grow" id="btn_pa" onClick={() => { this.setState({ displayFeedback: true }) }}>דרג אותי!</button>
                    </div>
                    : (status === "manager") ?
                        <button className="hvr-pulse-grow" id="btn_pa" onClick={(event) => this.addTherapist(event)}>אשר מטפל</button>
                        : (status === "therapist") ?
                            <button className="hvr-pulse-grow" id="btn_pa_cancel" onClick={() => { this.setState({ displayCancel: true }) }}>בטל פגישה</button>
                            : ""
                }


                <Modal id="modal_feedback" centered show={this.state.displayFeedback} onHide={() => { this.setState({ displayFeedback: false }); }}>
                    {/*  style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw' }}  */}
                    <Modal.Header id="modal_feedback_header">
                        <Modal.Title>דירוג המטפל</Modal.Title>
                    </Modal.Header>
                    {/*  style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw', height: '45vh' }} */}
                    <Modal.Body id="modal_feedback_body">

                        <Form>
                            <Form.Group controlId="formBasicRangeCustom">
                                {/* <input type="range" min="0" max="5" step="1" onChange={(event) => { alert(event.target.value) }} /> */}
                                <Form.Label>מקצועיות</Form.Label>
                                <Form.Control type="range" custom id="range1" min="0" max="5" step="1" />
                                <Form.Label>שירות</Form.Label>
                                <Form.Control type="range" custom id="range2" />
                                <Form.Label>מחיר</Form.Label>
                                <Form.Control type="range" custom id="range3" />
                                <Form.Row style={{ marginRight: '4.5vw', marginTop: '2vh' }}>
                                    <button id="btn_pa_cancel_modal" className="hvr-grow" onClick={(event) => this.deleteMeeting(event)}>הגש</button>
                                    <button id="btn_pa_cancel_modal" className="hvr-grow" onClick={() => { this.setState({ displayCancel: false }); }}>ביטול</button>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal id="modal_cancel_Meeting" centered show={this.state.displayCancel} onHide={() => { this.setState({ displayCancel: false }); }}>

                    <Modal.Body >
                        <Form.Label>האם אתה בטוח שברצונך לבטל את הפגישה?</Form.Label>
                        {(status === "therapist") ? <Form.Label>שים לב! עליך לעדכן על כך את המטופל בטלפון או במייל, ולתאם עימו פגישה חדשה.</Form.Label> : ""}
                        <Form.Row style={{ marginRight: '1vw', marginTop: '2vh' }}>
                            <button id="btn_pa_cancel_modal" className="hvr-grow" onClick={(event) => this.deleteMeeting(event)}>אישור</button>
                            <button id="btn_pa_cancel_modal" className="hvr-grow" onClick={() => { this.setState({ displayCancel: false }); }}>ביטול</button>
                        </Form.Row>
                    </Modal.Body>
                </Modal>
            </div>);
    }
}
