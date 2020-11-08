// import src from '*.bmp';
import React, { Component } from 'react';
import '../style.css';
import icon from '../images/tempIcon.png'
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
                
                <label>{this.props.firstName + " " + this.props.lastName} </label> <br /><br />
                <label>{this.props.category} </label> <br /><br />
                <label>{this.props.serviceArea} </label> <br /><br />
                <button>לעמוד שלי</button>
            </div>

        );

    }

} export default TherapistCard;
