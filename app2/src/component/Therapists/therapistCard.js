// import src from '*.bmp';
import React, { Component } from 'react';
import '../../style.css';
import { Button } from 'react-bootstrap';
import thImage from '../../images/thImage.jpg';
import icon from '../../images/tempIcon.png'
//להוסיף תמונה -לשאול איך

class TherapistCard extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: ""
    //     }
    //}
    render() {
        return (
            <div className="therapistCard">
                <img src={thImage} id="thImage" />
                <label>{this.props.firstName + " " + this.props.lastName}j </label>
                <label>{this.props.category} gg</label>
                <label>{this.props.serviceArea} kk</label>
                {/* <button id="thCard_btn">לעמוד שלי</button> */}
                <Button href="/therapistPage" variant="info" id="thCard_btn">כניסה לפרופיל</Button>{' '}
            </div>

        );

    }

} export default TherapistCard;
