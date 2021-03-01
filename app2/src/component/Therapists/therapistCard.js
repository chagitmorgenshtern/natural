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
    state = {
        therapistId: this.props.id
    }


    render() {

        return (
            <div className="therapistCard">
                <img src={thImage} id="thImage" />
                <label>{this.props.firstName + " " + this.props.lastName}</label>
                <label>{this.props.category}קטגוריה</label>
                <label>{this.props.serviceArea}אזור בארץ</label>
                {/* <button id="thCard_btn">לעמוד שלי</button> */}
                <Button href="/therapistPage" variant="info" id="thCard_btn" onClick={() => { localStorage.setItem("therapistId", this.state.therapistId + '') }}>כניסה לפרופיל</Button>{' '}
            </div>

        );

    }

} export default TherapistCard;
