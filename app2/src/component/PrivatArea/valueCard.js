import React, { Component } from 'react';
import { Button, Row, Form, Modal } from 'react-bootstrap';
export default class ValueCard extends Component {

    state = {
        displayFeedback: false
    }

    addTherapist = () => {
        //update applicant status
    }


    render() {
        const status = this.props.profileStatus;
        return (
            <div className="meetCard hvr-grow">
                <label className="text">{this.props.entry1}</label>
                <label className="text">{this.props.entry2}</label>
                <label className="text">{this.props.entry3}</label>
                {(status === "patient") ?
                    <button className="hvr-pulse-grow" id="btn_pa" onClick={() => { this.setState({ displayFeedback: true }) }}>דרג אותי!</button>
                    : (status === "manager") ?
                        <button className="hvr-pulse-grow" id="btn_pa" onClick={(event) => this.addTherapist(event)}>אשר מטפל</button>
                        : ""
                }


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
            </div>);
    }
}
