import React, { Component } from 'react';
import Feedback from './feedback';
import Transition_background from '../../images/Transition_background.jpg';
import Calendar from './calendar.jsx';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../../therapistPage.css'
import thImage from '../../images/thImage.jpg';

class TherapistPage extends Component {
    render() {
        return (
            <div className="therapistPage" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <div id="details-card">
                    <img src={thImage} id="thImage" />
                    <label>{this.props.firstName + " " + this.props.lastName}j </label>
                    <label>{this.props.category} gg</label>
                    <label>{this.props.serviceArea} kk</label>
                </div>
                <div id="feedbacks">
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                </div>

                <Calendar id="calendar-id" />

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