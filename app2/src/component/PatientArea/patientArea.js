import React, { Component } from 'react';
import "./patientArea.css"
import { Button, Row, Form, Modal } from 'react-bootstrap';
import UpdateForm from './updateForm';
import axios from '../../axios.js'
import MeetCard from './meetCard.js'

export default class PatientArea extends Component {

    state = {
        displayUpdateForm: false,
        all_My_Meets: [],
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


        //axios.get(`patients/Login/${this.state.email}/${this.state.pass}`).then(res => { debugger; alert(res.data); ans = res.data; })
        alert("mount")
        //TODO: זה צריך להיות מזהה או תז????
        axios.get(`meets/GetByPatientId/${this.state.patient.PatientId}`)
            .then(res => {
                debugger;
                alert(res);
                this.setState({ all_My_Meets: [...res.data] });
            });
    }

    //TODO check if works********************************************************************************************************
    updateDetails = () => {
        this.setState({ displayUpdateForm: true });
    }



    render() {

        const MyMeetsList = this.state.all_My_Meets
            .map((m, index) => {
                return <MeetCard key={index} therapistName={m.TherapistName} category={m.Category}
                    meetDate={m.meetDate} />
            })

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

                <div className="meets_table">
                    <h2 id="meets_title">הפגישות שלי</h2>
                    <div className="meets_table_title">
                        <label>שם המטפל</label>
                        <label>קטגוריה</label>
                        <label>תאריך</label>
                    </div>
                    {MyMeetsList}
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    {/*  <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard />
                    <MeetCard /> */}
                </div>



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