import React, { Component } from 'react';
import Feedback from './feedback';
import Transition_background from '../../images/Transition_background.jpg';
// import Calendar from './fullCalendar/calendar.jsx';
import { Modal } from 'react-bootstrap';
import './therapistPage.css'
import thImage from '../../images/thImage.jpg';
import star from '../../images/star.png'
import MyNavbar from '../navbar'
import Calendar from 'react-calendar';


class TherapistPage extends Component {

    state = {
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
        displayModalHours: true
    }

    select_hour = (hour) => {
        this.setState({ displayModalHours: true });
        alert(hour);
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
                    <img src={thImage} id="th-image" alt="profile-picture" />
                    {/* {this.props.firstName + " " + this.props.lastName} */}
                    <label className="t-labels" id="t-fullName">אלחנן וייס </label>
                    <label className="t-labels" id="t-category">נטורופת</label>
                    <label className="t-labels" id="t-s-area">אזור: השרון והסביבה</label>
                    <label className="t-labels" id="t-phone">0526447693 :טלפון </label>
                    <label className="t-labels" id="t-email">a345@gmail.com :מייל</label>
                    <div id="rating">
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                        <img className="stars" src={star} alt="rating-star" />
                    </div>
                </div>
                <div id="feedbacks">
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                </div>
                <div id="calendar-id"  >

                    <Calendar
                        calendarType="Hebrew"
                        onClickDay={(value, event) => { this.select_hour(value) }} />
                </div>
                {/* menuAlign="right" */}
                {/* <DropdownButton id="dropdown-item-button" title="בחר קטגוריה">

                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button" >Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton> */}



                <Modal id="modal_signup" centered style={{ width: '40%' }} show={this.state.displayModalHours} onHide={() => { this.setState({ displayModalHours: false }); }} >

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