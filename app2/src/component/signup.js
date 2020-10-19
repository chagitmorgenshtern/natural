import React, { Component } from 'react';
import axios from '../axios'
import '../style.css';

class Signup extends Component {
    state = {
        patient: {//לא צריך להתשמש במזהה בטופס נכון?
            PatientId: "",
            Firstname: "",
            Lastname: "",
            PatientTz: "",
            DateOfBirth: "",
            Email: "",
            Password: "pass",
            PhoneNumber1: "",
            PhoneNumber2: ""
        }

    }


    render() {
        return (
            <div className="signup">
                <form>

                    <center><h2>הרשמת מטופל</h2></center><br></br>


                    <input type="text" placeholder="שם משפחה" id="Lastname" onChange={(event) => this.inputChange(event)} /> <input type="text" placeholder="שם פרטי" id="Firstname" onChange={(event) => this.inputChange(event)} />  
                    <br></br>
                    <br></br>

                   <input type="text" placeholder="ת.ז" id="PatientTz" onChange={(event) => this.inputChange(event)} /> <input type="date" placeholder="תאריך לידה" id="DateOfBirth" onChange={(event) => this.inputChange(event)} />
                    <br></br>
                    <br></br>
                    <input type="text"placeholder="מס' פלאפון נוסף (לא חובה)" id="PhoneNumber2" onChange={(event) => this.inputChange(event)} /> <input type="text" placeholder="מספר פלאפון" id="PhoneNumber1" onChange={(event) => this.inputChange(event)} />
                    
                    <br></br><br></br>
                    <input type="text"placeholder="כתובת מייל" id="Email" onChange={(event) => this.inputChange(event)} />
                  
                    <br></br><br></br><br></br>
                    <label>בחר את הסיסמא שתשרת אותך בכניסתך לאתר</label>
                    <br></br>

                    <input type="password"placeholder="אימות סיסמא" id="Valid-Password" /> <input type="password" placeholder="סיסמא" id="Password" onChange={(event) => this.inputChange(event)} />
                    
                    <br></br><br></br>

                    <input type="button" value="button" onClick={() => this.newPateintHandler(this.state.patient)} />
                    <center><input type="submit" value="אישור" onClick={() => this.newPateintHandler(this.state.patient)} /></center>
                </form>
            </div>
        );
    }//render

   

    inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;

        this.setState({ pateint: newperson });

    }

    newPateintHandler = (patient) => {
        debugger;
        alert(this.state.patient.Password)
        if (!document.getElementById("Valid-Password").value === patient.Password){
            patient.Password = "";
            document.getElementById("Password").value = "";
            document.getElementById("Valid-Password").value = "";
            alert("not valid");
        }
        else {
            alert("okey");
            axios.post('patient/Register', patient).then(x => { console.log("succes!" + x) });
        }
    }


} export default Signup;