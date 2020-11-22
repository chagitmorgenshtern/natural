import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class TherapistPage extends Component {
    render() {
        return (
            <div className="therapists" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <h1>TherapistPage</h1>
                <div id="details"></div>
                <div id="feedbacks"></div>
                {/* menuAlign="right" */}
                <DropdownButton id="dropdown-item-button" title="בחר קטגוריה">

                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button" >Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>

            </div>
        );
    }
}
export default TherapistPage;