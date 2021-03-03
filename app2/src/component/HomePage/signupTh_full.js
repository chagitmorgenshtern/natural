import React, { Component } from 'react';
import { Document } from '../reactPdf';
import axios from '../../axios'
import FileBase64 from 'react-file-base64';
import { Form, Col } from 'react-bootstrap';
import arrow from '../../images/arrow.png'
import { Link } from 'react-router-dom';
import '../../style.css';
import MyContext from '../../context.jsx';

class SignupTh_full extends Component {
    // constructor(props) {
    //     setOptions({
    //         workerSrc: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.305/pdf.worker.min.js'
    //     });
    // }
    state = {
        therapist: {//לא צריך להתשמש במזהה בטופס נכון?
            FirstName: "",
            LastName: "",
            TherapistTz: "",
            DateOfBirth: "",
            PhoneNumber: "",
            Email: "",
            Password: "",
            Image: "",
            ServiceAreaId: "",
            Address: ""
        },
        serviceAreas: [],
        hours: [
            "08:00-09:00",
            "09:00-10:00",
            "10:00-11:00",
            "12:00-13:00",
            "14:00-15:00",
            "15:00-16:00",
            "16:00-17:00",
            "17:00-18:00",
            "18:00-19:00",
            "19:00-20:00",
            "20:00-21:00",
            "21:00-22:00"
        ],
        files: []
    }

    componentDidMount() {
        axios.get('serviceAreas/GetAllServiceAreas')
            .then(res => {
                alert("dddddddddd");
                console.log(res);
                this.setState({ serviceAreas: [...res.data] });
            })
        debugger;
    }

    inputChange = (event) => {
        debugger;
        const newperson = { ...this.state.therapist };
        const id = event.target.id;
        let value;

        if (id == "ServiceAreaId")
            value = event.target.selectedOptions[0].id;
        else
            value = event.target.value;
        newperson[id] = value;
        this.setState({ therapist: newperson });

    }



    register = () => {

        const newP = { ...this.state.therapist };
        // debugger;
        axios.post('therapists/Register', newP).then(res => { alert(res.data) });


        // if (document.getElementById("Valid-Password").value === patient.Password)
        //     axios.post('patient/Register', patient).then(x => { console.log("succes!" + x) });
        // else {
        //     patient.Password = "";
        //     document.getElementById("Password").value = "";
        //     document.getElementById("Valid-Password").value = "";
        //     alert("not valid");
        // }

    }

    onUpload(file) {
        debugger;
        const newState = { ...this.state.therapist };
        newState.Image = file.base64;
        // files.map(file=> file.base64)
        this.setState({ therapist: newState });
        //base64
    }

    // getFiles(files) {
    //     debugger;
    //     alert('aaaaaa');
    //     // this.setState({ files: files })
    // }

    render() {

        // const table = <table>
        //     {[1, 2, 3, 4, 5, 6].map(() => {
        //         return
        //         <tr>
        //             {this.state.hours.map((h) => { return <td>{h}</td> })}
        //         </tr>
        //     })}
        // </table>


        return (

            <div >
                {/* /* <form> 
            /* <h2 className="headerSignUp" >הרשמת מטופל</h2>  */}
                <Form className="signupTh_full">
                    <Form.Row>
                        <Form.Group as={Col}  >
                            <Form.Control placeholder="שם פרטי" className="inputs" id="FirstName" value={this.state.FirstName} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>
                        {/* <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />

                        </Form.Group> */}

                        <Form.Group as={Col} >
                            <Form.Control placeholder="שם משפחה" className="inputs" id="LastName" value={this.state.LastName} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control placeholder=".ת.ז" className="inputs" id="TherapistTz" value={this.state.TherapistTz} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            {/* id="DateOfBirth" */}
                            <Form.Control type="date" placeholder="תאריך לידה" className="inputs" value={this.state.DateOfBirth} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control type="Phone" placeholder="טלפון" className="inputs" id="PhoneNumber" value={this.state.PhoneNumber} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                        <Form.Group key={3} as={Col}>
                            {/* id="Email" */}
                            <Form.Control key={4} type="email" placeholder="כתובת מייל" className="inputs" value={this.state.Email} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group key={3} as={Col}>
                            {/* <input type="file" placeholder="upload img" onUpload={onUpload} />*/}

                            <Form.Control className="inputs" id="ServiceAreaId" as="select" custom value={this.state.ServiceAreaId} onChange={(event) => this.inputChange(event)}>
                                {/* <option id="0">הכל</option>
                            <option id="1">הכל</option>
                            <option id="2">הכל</option>
                            <option id="3">הכל</option> */}
                                {/* {categoriesList} */}

                                {/* <MyContext.Consumer>

                                {(context) => (
                                    <React.Fragment>
                                        { context.state.ServiceAreas?.map((x, index) => { return <option key={index} id={x.SAId}>{x.SAName}</option> })}
                                        { Object.keys(context.ServiceAreas).map((x) => { return <option id={x.SAId}>{x.SAName}</option> })} 
                                    </React.Fragment>
                                )}
                            </MyContext.Consumer>*/}

                            </Form.Control>
                        </Form.Group>

                        <Form.Group key={3} as={Col}>
                            <Form.Control key={4} type="text" placeholder="כתובת הקליניקה- עיר, רחוב, מספר בית, כניסה" className="inputs" id="Address" value={this.state.Address} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Check aria-label="option 1" />
                    <Form.Row>

                    </Form.Row>
                    <Form.Row>
                        <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Control type="password" placeholder="סיסמא" className="inputs" id="Password" value={this.state.Password} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Control type="password" className="inputs" id="confirm_password" placeholder="אימות סיסמא " />
                        </Form.Group>


                        {/* type="submit"  */}
                        <Form.Group as={Col}>
                            <Link onClick={() => { this.register() }}><img src={arrow} id="arrow" /></Link>
                        </Form.Group>
                    </Form.Row>

                </Form>
                <FileBase64
                    multiple={false}
                    onDone={this.onUpload.bind(this)}
                />
                {/* {this.state.therapist.Image && <><Document file={"C:/Users/HOME/Downloads/%D7%91%D7%A11.pdf"} />        </>} */}
                <div id="image_div" style={{ backgroundImage: `url(${this.state.therapist.Image})` }} />
                {/* <input
                    type="file"
                    onChange={this.onUpload.bind(this)}
                    multiple={false} /> */}
            </div>
        );
    }//render


} export default SignupTh_full;