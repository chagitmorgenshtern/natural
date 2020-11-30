import React, { Component } from 'react';
import user from '../../images/user.png'
import { isCompositeComponent } from 'react-dom/test-utils';

class Feedback extends Component {

    render() {
        return (
            //  style={{ backgroundColor: '#ffffff5c', width: '300px', height: '100px', alignItems: 'center' }}
            <div id="feedback" >
                {/* style={{ borderRadius: '50%' }} */}
                <img src={user} id="feedback-image" />
                <label>שם</label><br />
                <label>....................תגובה.........................</label>
                {/* stars */}

            </div>);
    }


} export default Feedback;