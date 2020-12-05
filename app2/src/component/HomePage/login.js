import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import arrow from '../../images/arrow.png';

import { Form, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios'



class Login extends Component {
  state = {
    email: "",
    pass: ""
  }

  // onChangehandler(e) {
  // onChange={(e) => { onChangehandler(e) }}
  // }



  checkLogin() {
    //debugger;
    // , this.state.pass
    //axios.get('patients/Login/' + this.state.email).then(res => { debugger; alert(res) })


    // axios.get('patients/Login/', {
    //   params: {
    //     email: this.state.email, pass: this.state.pass
    //   }
    // }).then(res => { debugger; alert(res) })



    // axios.get('therapists/GetAll')
    //   .then(res => {
    //     console.log(res);

    //   })
    alert("in");
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


        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="כתובת מייל" onChange={(event) => { this.setState({ email: event.target.value }) }} />
        </Form.Group>


        <Form.Control id="passwordFromLogIn" type="password" placeholder="סיסמא" onChange={(event) => { this.setState({ pass: event.target.value }) }} />
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