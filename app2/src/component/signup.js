import React, { Component } from 'react';

class Signup extends Component {
    state = {
        patient: {//לא צריך להתשמש במזהה בטופס נכון?
            id: "",
            firstName: "",
            lastName: "",
            patientTz: "",
            dateOfBirth: "",
            email: "",
            password: "",
            phoneNumber1: "",
            phoneNumber2: ""
        }

    }


    render() {
        return (
            <div className="signup">
                <form>

                    <center><h2>הרשמת מטופל</h2></center><br></br>


                    <input type="text" placeholder="Your first name" />
                    <label>:שם פרטי</label><br></br>

                    <input type="text" placeholder="Your last name" />
                    <label>:שם משפחה</label><br></br>

                    <input type="text" placeholder="ID number" />
                    <label>:תעודת זהות</label><br></br>

                    <input type="date" placeholder="Date of Birth" />
                    <label>:תאריך לידה</label><br></br>

                    <input type="text" />
                    <label>:מספר פלאפון</label> <br></br>

                    <input type="text" />
                    <label>:פלאפון נוסף</label><br></br>

                    <input type="text" />
                    <label>:כתובת מייל</label><br></br>

                    <label>בחר את הסיסמא שתשרת אותך בכניסתך לאתר</label>
                    <br></br>

                    <input type="password" />
                    <label>:סיסמא</label><br></br>

                    <input type="password" />
                    <label>:אימות סיסמא</label><br></br>

                </form>
                <center><input type="submit" value="אישור" /></center>

            </div>
        );
    }

} export default Signup;