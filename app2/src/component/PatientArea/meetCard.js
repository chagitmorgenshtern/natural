import React, { Component } from 'react';
import { Button, Row, Form, Modal } from 'react-bootstrap';
export default class MeetCard extends Component {

    state = {
        displayFeedback: false
    }

    render() {

        return (
            <div className="meetCard hvr-grow">
                <label className="text">{this.props.therapistName}</label>
                <label className="text">{this.props.category}</label>
                <label className="text">{this.props.meetDate}</label>
                <button className="hvr-pulse-grow" onClick={() => { this.setState({ displayFeedback: true }) }}>דרג אותי!</button>



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
