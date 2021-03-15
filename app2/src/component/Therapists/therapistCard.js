// import src from '*.bmp';
import React, { Component } from 'react';
import '../../style.css';
import { Button } from 'react-bootstrap';
import thImage from '../../images/thImage.jpg';
import icon from '../../images/tempIcon.png'
import axios from '../../axios'

class TherapistCard extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: ""
    //     }
    //}
    state = {
        therapistId: this.props.therapistId
    }


    go_to_therapist_page = () => {
        // debugger;
        // axios.get(`therapists/GetById/${this.state.therapistId}`)
        //     .then(res => {
        //         localStorage.setItem("therapist", JSON.stringify(res.data));
        //         debugger;
        //     });

        localStorage.setItem("selectedTherapistId", this.props.therapistId)

    }

    render() {
        // const categories = 
        return (
            <div className="therapistCard">
                <div id="image_div" style={{ backgroundImage: `url(${this.props.image})`, marginTop: '5px', marginRight: '0px' }} />
                {/* <img src={thImage} id="thImage" />
                <img src={`url(${this.props.image})`} id="thImage" /> */}
                <label>{this.props.firstName + " " + this.props.lastName}</label>
                <div id="categories_labels">{this.props.categories.map((x) => { return <label>{x + ", "}</label> })}</div>
                <label>{this.props.serviceArea}</label>
                {/* <button id="thCard_btn">לעמוד שלי</button> */}
                <Button href={`/therapistPage/${this.props.therapistId}`} variant="info" id="thCard_btn" onClick={() => { this.go_to_therapist_page() }}>כניסה לפרופיל</Button>{' '}
                {/* localStorage.setItem("therapistId", this.props.therapistId) */}
            </div>

        );

    }

} export default TherapistCard;
