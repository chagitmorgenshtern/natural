import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import arrow from '../../images/arrow.png';

import { Form, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios'



class Login extends Component {
  state = {
    email: "",
    pass: "",
    user: []
  }

  // onChangehandler(e) {
  // onChange={(e) => { onChangehandler(e) }}
  // }



  async checkLogin() {
    //debugger;
    //alert("sssssssss");

    const user = await axios.get(`patients/Login/${this.state.email}/${this.state.pass}`)
    // alert(user.data);
    debugger;
    if (user.data) {
      localStorage.setItem("newuser", JSON.stringify(user.data))
      localStorage.setItem("signedIn", true);
    }
    else {
      alert('Email Or Password Is Not Correct')
    }

    // alert(JSON.parse(localStorage.getItem("newuser")).PatientId)


    // //אני רוצה לקבל את כל האובייקט של היוזר
    // axios.get(`patients/GetByEmail`, { mail: this.state.email })
    //   .then(r => {
    //     this.setState({ user: [...r.data] });
    //     
    //     alert(r.data)
    //   });



  }


  render() {
    return (

      <Form className="login">
        {/*<center><h2 className="headerLogIn" >כניסה</h2> </center>
        <Form.Group as={Col} controlId="email">
          <Form.Control id="email" type="mail" placeholder="מייל-שם משתמש" />
        </Form.Group> */}

        {/* key={2} */}
        {/* <Form.Group key={1} as={Col} controlId="email">
          <Form.Control id="emailFromLogIn" type="email" placeholder="כתובת מייל" onChange={(event) => { this.setState({ email: event.target.value }) }} />
        </Form.Group> */}


        <Form.Group type="email">
          <Form.Control id="emailFromLogIn" type="email" placeholder="כתובת מייל" onChange={(event) => { this.setState({ email: event.target.value }) }} />
        </Form.Group>


        <Form.Control id="passwordFromLogIn" type="password" placeholder="סיסמא"
          onChange={(event) => { this.setState({ pass: event.target.value }) }} />
        {/* <Button variant="light" type="submit">כניסה</Button> */}
        <Link onClick={() => this.checkLogin()}><img src={arrow} id="arrowFromLogIn" /></Link>

        {/* רקע נהפך ללבן כשבוחרים  */}
        {/* <Form.Row>
          
          <Form.Group as={Col} controlId="email">
            <Form.Control onChange = {(e)=>{onChangehandler(e)}} type="email" placeholder="מייל-שם משתמש" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="password">
            <Form.Control type="password" placeholder="סיסמא" />
          </Form.Group>
        </Form.Row>
        */}

      </Form>

    );
  }



} export default Login;