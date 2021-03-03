import React, { Component } from 'react';
import "./privatArea.css"
import Transition_background from '../../images/Transition_background.jpg';
import { Button, Row, Form, Modal } from 'react-bootstrap';
import UpdateForm from './updateForm';
import axios from '../../axios.js'
import ValueCard from './valueCard.js'

export default class PatientArea extends Component {

    state = {
        displayUpdateForm: false,
        all_My_Meets: [],
        all_Applicants: [],
        patient: JSON.parse(localStorage.getItem("user"))

        // patient: {
        //     PatientId: "",
        //     Firstname: "",
        //     Lastname: "",
        //     PatientTz: "",
        //     DateOfBirth: "",
        //     Email: "",
        //     Password: "",
        //     PhoneNumber1: "",
        //     PhoneNumber2: ""
        // }

    }

    componentDidMount() {
        //הצגת נתוני המטופל לפי הפרופס שנשלחו
        // const p_details= {...this.props.patient};
        // this.setState({patient:p_details})
        //בלי העתקה עמוקה!!!!!!!!!!
        // this.setState({patient:this.props.patient})


        //axios.get(`patients/Login/${this.state.email}/${this.state.pass}`).then(res => { debugger; alert(res.data); ans = res.data; })

        //TODO: זה בסדר השליפה מJSON????
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
        const status = this.props.profileStatus;
        const MyValuesList = (status == "patient") ?
            this.state.all_My_Meets.map((m, index) => {
                return <ValueCard key={index} profileStatus={this.props.profileStatus} entry1={m.TherapistName} entry2={m.CategoryName}
                    entry3={m.MeetDate} />
            })
            : (status == "manager") ?
                this.state.all_Applicants.map((a, index) => {
                    return <ValueCard key={index} profileStatus={this.props.profileStatus} entry1={a.FirstName + " " + a.LastName} entry2={a.TherapistTz}
                        entry3={a.Email} />
                })
                : "";

        // if (this.props.profileStatus == "patient") {
        //     const MyValuesList = this.state.all_My_Meets
        //         .map((m, index) => {
        //             return <ValueCard key={index} therapistName={m.TherapistName} category={m.Category}
        //                 meetDate={m.meetDate} />
        //         })
        // }
        // else if (this.props.profileStatus == "manager") {
        //     const MyValuesList = this.state.all_My_Meets
        //         .map((m, index) => {
        //             return <ValueCard key={index} therapistName={m.TherapistName} category={m.Category}
        //                 meetDate={m.meetDate} />
        //         })
        // }
        // else {
        //     const MyValuesList = [];
        // }

        return (
            <div className="privatArea" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div id="p-details-card">
                    <label className="p-label">{"שם מלא:" + (this.props.fullName ? this.props.fullName : "")}</label>
                    <label className="p-label">{"ת.ז.:" + (this.props.tz ? this.props.tz : "")}</label>
                    <label className="p-label">{"תאריך לידה:" + (this.props.dateOfBirth ? this.props.dateOfBirth : "")}</label>
                    <label className="p-label">{"מייל:" + (this.props.email ? this.props.email : "")}</label>
                    <label className="p-label">{"טלפון:" + (this.props.phoneNumber1 ? this.props.phoneNumber1 : "")}</label>
                    <label className="p-label">{"טלפון נוסף:" + (this.props.phoneNumber2 ? this.props.phoneNumber2 : "")}</label>
                    {/* <Row> */}
                    <Button onClick={() => this.updateDetails()} size="sm" variant="info" id="update_btn" className="hvr-curl-bottom-left">עדכון פרטים</Button>
                    {/* </Row> */}
                </div>

                <div className="meets_table">
                    <h2 id="meets_title">{this.props.title}</h2>
                    <div className="meets_table_title">
                        <label>{this.props.index1}</label>
                        <label>{this.props.index2}</label>
                        <label>{this.props.index3}</label>
                    </div>
                    {MyValuesList}
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
                    <ValueCard profileStatus={this.props.profileStatus} />
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