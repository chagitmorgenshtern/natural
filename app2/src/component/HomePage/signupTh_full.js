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
        categoryId: "",
        serviceAreas: [],
        categories: [],
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
                //alert("dddddddddd");
                console.log(res);
                this.setState({ serviceAreas: [...res.data] });
            })
        debugger;
        axios.get('categories/GetAllCategories')
            .then(res => {
                debugger;
                console.log(res);
                if (res.data != null)
                    this.setState({ categories: [...res.data] });
            })
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
        debugger;
        axios.post('therapists/Register', newP).then(res => { alert(res.data) });
        //axios.put('therapists/UpdateTherapist', newP).then(res => { alert(res.data) });


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
        //debugger;
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
        const serviceAreasList = this.state.serviceAreas
            .map((x, index) => { return <option key={index} id={x.SAId}>{x.SAName}</option> });

        const categoriesList = this.state.categories
            .map((x, index) => { return <option key={index} id={x.CategoryId} value={x.CategoryId}>{x.CategoryName}</option> });

        const hours_titles = this.state.hours
            .map((x, index) => { return <label className="table_horse_labels">{x}</label> })

        const hours = this.state.hours
            .map((x, index) => { return <Form.Check aria-label="option 1" className="checkbox" onChange={(event) => { }} /> })




        let days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי"];
        // const hours = days.map((item, dayIndex) => {
        //     this.state.hours
        //         .map((x, index) => { return <Form.Check aria-label="option 1" className="checkbox" onChange={(event) => {/*onClick(dayIndex, index) */ }} /> })
        // })
        const days_labels = days.map((x, index) => { return <label id={index} className="table_horse_labels">{x}</label> })

        return (

            <div>
                {/* /* <form> 
            /* <h2 className="headerSignUp" >הרשמת מטופל</h2>  */}
                <Form className="signupTh_full">
                    <Form.Row>
                        <h4 style={{ color: 'white', margin: '0.5vw 0vw' }}>טופס הרשמת מטפל</h4>
                    </Form.Row>


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



                        <Form.Group as={Col}>
                            <Form.Control placeholder=".ת.ז" className="inputs" id="TherapistTz" value={this.state.TherapistTz} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} >
                            {/*  */}
                            <Form.Control type="date" placeholder="תאריך לידה" className="inputs" id="DateOfBirth" value={this.state.DateOfBirth} style={{ marginRight: '0%' }} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>



                        <Form.Group as={Col}>
                            <Form.Control type="Phone" placeholder="טלפון" className="inputs" id="PhoneNumber" value={this.state.PhoneNumber} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                        <Form.Group key={3} as={Col}>

                            <Form.Control key={4} type="email" placeholder="כתובת מייל" className="inputs" id="Email" value={this.state.Email} style={{ marginRight: '0%' }} onChange={(event) => this.inputChange(event)} />
                            <h5 style={{ color: 'white', fontSize: 'x-small', marginTop: '4px' }}>*כתובת מייל זו תשמש עבור החשבון העסקי שלך, ולכן, אם תרצה להרשם גם כמטופל, לא תוכל להשתמש בכתובת מייל זו שוב.</h5>
                            {/* <Form.Control id="emailFromLogIn" type="email" placeholder="כתובת מייל" onChange={(event) => { this.setState({ email: event.target.value }) }} /> */}

                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{ marginTop: '-3vh' }}>
                        <Form.Group key={3} as={Col}>
                            {/* <input type="file" placeholder="upload img" onUpload={onUpload} />*/}

                            <Form.Control className="inputs" id="ServiceAreaId" as="select" custom value={this.state.ServiceAreaId} onChange={(event) => this.inputChange(event)}>
                                {serviceAreasList}
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



                        <div style={{ width: '21vw', display: 'flex' }}>
                            <FileBase64
                                id="uploadImage"
                                className="inputs"

                                multiple={false}
                                onDone={this.onUpload.bind(this)}
                            />

                            <div id="image_div" style={{ backgroundImage: `url(${this.state.therapist.Image})` }} />
                        </div>
                    </Form.Row>

                    <h5 id="hours_table_title">בחר את שעות העבודה שלך</h5>
                    <React.Fragment>
                        <div id="hours_table_titles">{days_labels}</div>
                        <div id="hours_table_signup">

                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.4vh' }}>{hours_titles}</div>
                            <div>{hours}</div>
                            <div>{hours}</div>
                            <div>{hours}</div>
                            <div>{hours}</div>
                            <div>{hours}</div>
                        </div>
                    </React.Fragment>

                    <Form.Control className="selectbox" id="categoryId" as="select" custom style={{ position: 'fixed', right: '50vw', top: '51vh' }}>
                        {/* onChange={(event) => this.inputChange(event)} */}
                        {categoriesList}

                    </Form.Control>

                    <Form.Row style={{ marginTop: '2vh' }}>
                        <center> <h5 id="hours_table_title" className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h5>  </center>
                    </Form.Row>


                    <Form.Row style={{ marginRight: '5vw' }}>
                        <Form.Group as={Col} >
                            <Form.Control type="password" placeholder="סיסמא" className="inputs" id="Password" value={this.state.Password} onChange={(event) => this.inputChange(event)} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Control type="password" className="inputs" id="confirm_password" placeholder="אימות סיסמא " />
                        </Form.Group>


                        {/* type="submit"  */}
                        <Form.Group as={Col}>
                            <Link onClick={() => { this.register() }}><img src={arrow} id="arrow" style={{ marginRight: '-0.5vw' }} /></Link>
                        </Form.Group>
                    </Form.Row>

                </Form>

                {/* {this.state.therapist.Image && <><Document file={"C:/Users/HOME/Downloads/%D7%91%D7%A11.pdf"} />        </>} */}
                {/* <input
                    type="file"
                    onChange={this.onUpload.bind(this)}
                    multiple={false} /> */}
            </div>
        );
    }//render


} export default SignupTh_full;
