import React, { Component } from 'react';
import PrivatArea from '../PrivatArea/privatArea.js'

class TherapistArea extends Component {
    state = {

    }

    render() {

        return (
            <div>
                <PrivatArea
                    profileStatus="therapist"
                    //אמור להיות בלוקל-סטורייג או להעביר ככה בפרופס
                    // fullName=""
                    // tz=""
                    // dateOfBirth=""
                    // email=""
                    // phoneNumber1=""
                    // phoneNumber2=""
                    title="הפגישות שלי"
                    index1="שם המטופל"
                    index2="קטגוריה"
                    index3="תאריך"
                />
            </div>

        );
    }
} export default TherapistArea;