import React, { Component } from 'react';
import Feedback from './feedback';
import Transition_background from '../../images/Transition_background.jpg';
// import Calendar from './fullCalendar/calendar.jsx';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import './therapistPage.css'
import thImage from '../../images/thImage.jpg';
import star from '../../images/star.png'
import MyNavbar from '../navbar'
import Calendar from 'react-calendar';


class TherapistPage extends Component {
    render() {
        return (
            <div className="therapistPage" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* <MyNavbar /> */}

                <div id="details-card">
                    <img src={thImage} id="th-image" />
                    {/* {this.props.firstName + " " + this.props.lastName} */}
                    <label className="t-labels" id="t-fullName">אלחנן וייס </label>
                    <label className="t-labels" id="t-category">נטורופת</label>
                    <label className="t-labels" id="t-s-area">אזור: השרון והסביבה</label>
                    <label className="t-labels" id="t-phone">0526447693 :טלפון </label>
                    <label className="t-labels" id="t-email">a345@gmail.com :מייל</label>
                    <div id="rating">
                        <img className="stars" src={star} />
                        <img className="stars" src={star} />
                        <img className="stars" src={star} />
                        <img className="stars" src={star} />
                        <img className="stars" src={star} />
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
                <div id="calendar-id" >

                    <Calendar calendarType="Hebrew" />
                </div>
                {/* menuAlign="right" */}
                {/* <DropdownButton id="dropdown-item-button" title="בחר קטגוריה">

                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button" >Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton> */}

            </div>
        );
    }
}
export default TherapistPage;