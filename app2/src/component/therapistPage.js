import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';


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
            </div>
        );
    }
}
export default TherapistPage;