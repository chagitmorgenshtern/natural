import React, { Component } from 'react';
import PrivatArea from '../PrivatArea/privatArea.js'
class ManagerArea extends Component {
    state = {}

    render() {
        return (<div>
            <PrivatArea
                profileStatus="manager"
                //אמור להיות בלוקל-סטורייג או להעביר ככה בפרופס
                // fullName=""
                // tz=""
                // dateOfBirth=""
                // email=""
                // phoneNumber1=""
                // phoneNumber2=""
                title="מטפלים ממתינים לאישור"
                index1="שם"
                index2="מייל"
                index3="תעודת זהות"
            />
        </div>);
    }
}

export default ManagerArea;