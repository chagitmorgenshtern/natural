import React, { Component } from 'react';
import axios from '../axios'
import '../style.css';

class Signup extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         pateint:{
    //         PatientId: "",
    //         Firstname: "",
    //         Lastname: "",
    //         PatientTz: "",
    //         DateOfBirth: "",
    //         Email: "",
    //         Password: "",
    //         PhoneNumber1: "",
    //         PhoneNumber2: ""
    //     }
    // }
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

                    <center>
                    <rightto> 
                    <input type="text" placeholder="שם פרטי" id="Firstname" className="input" onChange={(event) => this.inputChange(event)} /> <input type="text" placeholder="שם משפחה" id="Lastname" className="input" onChange={(event) => this.inputChange(event)} />  
                    <br></br>
                    <br></br>

                    
                   <input type="date" placeholder="תאריך לידה" id="DateOfBirth"  className="input" onChange={(event) => this.inputChange(event)} /><input type="text" placeholder="ת.ז" id="PatientTz" className="input" onChange={(event) => this.inputChange(event)} />
                    <br></br>
                    <br></br>
                   
                    <input type="text" placeholder="מספר פלאפון" id="PhoneNumber1" className="input" onChange={(event) => this.inputChange(event)} /> <input type="text"placeholder="מס' פלאפון נוסף (לא חובה)" id="PhoneNumber2"  className="input"onChange={(event) => this.inputChange(event)} /> 
                    
                    <br></br><br></br>
                    <input type="text"placeholder="כתובת מייל" id="Email"className="input" onChange={(event) => this.inputChange(event)} />
                  
                    <br></br><br></br><br></br>
                    <label>בחר את הסיסמא שתשרת אותך בכניסתך לאתר</label>
                    <br></br>

                    
                    <input type="password" className="input" placeholder="סיסמא" id="Password" className="input" onChange={(event) => this.inputChange(event)} />  <input type="password" className="input" placeholder="אימות סיסמא" id="Valid-Password" /> 
                    
                    <br></br><br></br>

                    
                    <center><input type="submit" value="אישור" onClick={() => this.newPateintHandler(this.state.patient)} /></center>
                    </rightto>
                    </center>
                </form>
            </div>
        );
    }//render

   

    inputChange = (event) => {
   
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;

        this.setState({ patient: newperson })
        // alert(newperson[id])
    }

    resetValue=(id)=>
    {
        const newperson = { ...this.state.patient };
        newperson[id] = "";
        this.setState({ patient: newperson })
    }

    newPateintHandler = (patient) => {
        debugger;
       
        var flag=1;
        if (document.getElementById("Valid-Password").value != document.getElementById("Password").value){
            this.resetValue("Password");
            document.getElementById("Password").value = "";
            document.getElementById("Valid-Password").value = "";
            flag=0;
           
        }
        if(flag==1) {
            axios.post('patient/Register', patient)
            .then(x => { console.log("succes!" + x) });
            alert("הידד");
        }
    }


} export default Signup;