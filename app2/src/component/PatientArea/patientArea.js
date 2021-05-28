import React, { Component } from 'react';
import PrivatArea from '../PrivatArea/privatArea.js'


export default class PatientArea extends Component {

    state = {
        displayUpdateForm: false,
        all_My_Meets: [],
        patient: {
            PatientId: "",
            Firstname: "",
            Lastname: "",
            PatientTz: "",
            DateOfBirth: "",
            Email: "",
            Password: "",
            PhoneNumber1: "",
            PhoneNumber2: ""
        }

    }

    // componentDidMount() {
    //     //הצגת נתוני המטופל לפי הפרופס שנשלחו
    //     // const p_details= {...this.props.patient};
    //     // this.setState({patient:p_details})
    //     //בלי העתקה עמוקה!!!!!!!!!!
    //     // this.setState({patient:this.props.patient})


    //     //axios.get(`patients/Login/${this.state.email}/${this.state.pass}`).then(res => { debugger; alert(res.data); ans = res.data; })
    //     alert("mount")
    //     //TODO: זה צריך להיות מזהה או תז????
    //     axios.get(`meets/GetByPatientId/${this.state.patient.PatientId}`)
    //         .then(res => {
    //             debugger;
    //             alert(res);
    //             this.setState({ all_My_Meets: [...res.data] });
    //         });
    // }


    render() {

        return (
            <div>
                <PrivatArea
                    profileStatus="patient"
                    //אמור להיות בלוקל-סטורייג או להעביר ככה בפרופס
                    // fullName=""
                    // tz=""
                    // dateOfBirth=""
                    // email=""
                    // phoneNumber1=""
                    // phoneNumber2=""
                    title="הפגישות שלי"
                    index1="שם המטפל"
                    index2="קטגוריה"
                    index3="תאריך"
                />

            </div>

        );
    }
}