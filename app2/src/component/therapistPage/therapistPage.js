import React, { Component } from 'react';
import Feedback from './feedback';
import Transition_background from '../../images/Transition_background.jpg';
// import Calendar from './fullCalendar/calendar.jsx';
import { Modal } from 'react-bootstrap';
import './therapistPage.css'
import thImage from '../../images/thImage.jpg';
import star from '../../images/star.png'
//import MyNavbar from '../navbar'
import Calendar from 'react-calendar';
import axios from '../../axios'

class TherapistPage extends Component {
    // JSON.parse(localStorage.getItem("therapist"))
    state = {
        therapistDetails: {},
        hours: [
            "08:00-09:00",
            "09:00-10:00",
            "10:00-11:00",
            "12:00-13:00",
            "14:00-15:00",
            "15:00-16:00",
            "16:00-17:00",
            "17:00-18:00",
            "18:00-19:00",
            "19:00-20:00",
            "20:00-21:00",
            "21:00-22:00"
        ],
        displayModalHours: false,
        selectedDate: ""
    }

    componentDidMount() {
        debugger;
        // let id = parseInt(localStorage.getItem("selectedTherapistId"));

        const id = this.props.match.params.theapistId;
        axios.get(`therapists/GetById/${id}`)
            .then(res => {
                debugger;
                console.log(res);
                // const newState = ;
                // this.setState({ therapistDetails: [...res.data] });
                localStorage.setItem("therapistDetails", JSON.stringify(res.data))
                this.setState({ therapistDetails: res.data || {} })
            });



    }

    select_hour = (hour) => {
        this.setState({ displayModalHours: true });
        //alert(hour);
    }

    render() {

        const hour_td = this.state.hours.map((x, index) => {
            return <button id={index} onClick={() => this.select_hour(x)}>{x}</button>
        });

        return (
            <div className="therapistPage" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* <MyNavbar /> */}

                <div id="details-card">
                    {/* <img src={thImage} id="th-image" alt="profile-picture" /> */}

                    <div id="th-image" style={{ backgroundImage: `url(${this.state.therapistDetails.Image})` }} />

                    <label className="t-labels" id="t-fullName">{this.state.therapistDetails.FirstName + " " + this.state.therapistDetails.LastName}</label>

                    {/* <label className="t-labels" id="t-category">{this.state.therapistDetails.}</label> */}
                    <div id="categories_labels" className="t-labels" id="t-category">{(this.state.therapistDetails.CategoriesNames) ?
                        this.state.therapistDetails.CategoriesNames.map((x) => { return <label>{x + "  | "}</label> }) : ""}</div>

                    <label className="t-labels" id="t-s-area">{this.state.therapistDetails.ServiceAreaName}</label>
                    <label className="t-labels" id="t-phone">{this.state.therapistDetails.PhoneNumber}</label>
                    <label className="t-labels" id="t-email">{this.state.therapistDetails.Email}</label>

                    <div id="rating">
                        <img className="stars" src={star} alt="rating-star" style={{ marginLeft: '7vw', marginTop: '-2vh' }} />
                        {/* <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" /> */}
                    </div>
                </div>
                <div id="feedbacks">
                    <Feedback name="יצחק" message="טיפול מצוין ויחס טוב" />
                    <Feedback name="משה" message="נחמד ומקצועי" />
                    <Feedback name="לוי" message="שירות טוב" />
                    <Feedback name="חיים" message="מחיר הכי טוב בשוק" />
                    <Feedback name="אהרון" message="אכפתי ומסור" />
                    <Feedback name="יהודה" message="נהנתי מאוד, ממליץ" />
                </div>
                <div id="calendar-id"  >

                    <Calendar
                        calendarType="Hebrew"
                        onClickDay={(value, event) => { debugger; this.setState({ displayModalHours: true, selectedDate: value }); }} />
                </div>
                {/* menuAlign="right" */}
                {/* <DropdownButton id="dropdown-item-button" title="בחר קטגוריה">

                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button" >Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton> */}



                <Modal id="modal_hours" centered style={{ width: '40%' }} show={this.state.displayModalHours} onHide={() => { this.setState({ displayModalHours: false }); }} >

                    <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)' }} closeButton>
                        <Modal.Title>:בחר שעה לטיפול</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)' }}>
                        <div id="hours_table">
                            {hour_td}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default TherapistPage;