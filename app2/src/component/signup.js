import React, { Component } from 'react';
import axios from '../axios'

class Signup extends Component {
    state = {
        patient: {//לא צריך להתשמש במזהה בטופס נכון?
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


    render() {
        return (
            <div className="signup">
                <form>

                    <center><h2>הרשמת מטופל</h2></center><br></br>


                    <input type="text" placeholder="Your first name" id="Firstname" onChange={(event) => this.inputChange(event)} />
                    <label>:שם פרטי</label><br></br>

                    <input type="text" placeholder="Your last name" id="Lastname" onChange={(event) => this.inputChange(event)} />
                    <label>:שם משפחה</label><br></br>

                    <input type="text" placeholder="ID number" id="PatientTz" onChange={(event) => this.inputChange(event)} />
                    <label>:תעודת זהות</label><br></br>

                    <input type="date" placeholder="Date of Birth" id="DateOfBirth" onChange={(event) => this.inputChange(event)} />
                    <label>:תאריך לידה</label><br></br>

                    <input type="text" id="PhoneNumber1" onChange={(event) => this.inputChange(event)} />
                    <label>:מספר פלאפון</label> <br></br>

                    <input type="text" id="PhoneNumber2" onChange={(event) => this.inputChange(event)} />
                    <label>:פלאפון נוסף</label><br></br>

                    <input type="text" id="Email" onChange={(event) => this.inputChange(event)} />
                    <label>:כתובת מייל</label><br></br>

                    <label>בחר את הסיסמא שתשרת אותך בכניסתך לאתר</label>
                    <br></br>

                    <input type="password" id="Password" onChange={(event) => this.inputChange(event)} />
                    <label>:סיסמא</label><br></br>

                    <input type="password" id="Valid-Password" />
                    <label>:אימות סיסמא</label><br></br>

                    <input type="button" value="button" onClick={() => this.newPateintHandler(this.state.patient)} />
                    <center><input type="submit" value="אישור" onClick={() => this.newPateintHandler(this.state.patient)} /></center>
                </form>
            </div>
        );
    }//render

    valid

    inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;

        this.setState({ pateint: newperson });

    }

    newPateintHandler = (patient) => {
        debugger;
        alert(this.state.patient.Password.value)
        if (document.getElementById("Valid-Password").value === patient.Password)
            axios.post('patient/Register', patient).then(x => { console.log("succes!" + x) });
        else {
            patient.Password = "";
            document.getElementById("Password").value = "";
            document.getElementById("Valid-Password").value = "";
            alert("not valid");
        }
    }


} export default Signup;