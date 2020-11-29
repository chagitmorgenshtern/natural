import React, { Component } from 'react';
import matt from '../../images/matt.jpg'
import { isCompositeComponent } from 'react-dom/test-utils';

class Feedback extends Component {

    render() {
        return (
            <div style={{ backgroundColor: '#ffffff5c', width: '300px', height: '100px', alignItems: 'center' }}>
                <img src={matt} style={{ borderRadius: '50%' }} />
                <label>שם</label>
                <label>....................תגובה.........................</label>
                {/* stars */}

            </div>);
    }


} export default Feedback;