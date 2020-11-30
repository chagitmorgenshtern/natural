import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Col, Modal } from 'react-bootstrap';
import backg from '../images/background01.jpg'
import btn_read_more from '../images/btn_read_more01.png'
import btn_to_therapists from '../images/btn01.png'
import icon from '../images/--.png'
import { Link } from 'react-router-dom'
import Signup from './signup';
import Login from './login';
// import { NavDropdown } from 'react-bootstrap';
class HomePage extends Component {

    state = {
        displaySignup: false,
        displayLogIn: false
    }

    // openSignUp() {
    //     alert("cscsc");
    //     this.setState({ displaySignup: true });

    // }
    // openLogIn() {
    //     //alert("1323");


    // }
    // handleClose = () => setShow(false);

    render() {

        return (
            //check how to do this in the css
            <div className="homePage" style={{
                backgroundImage: `url(${backg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                {/* <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/signupTh">כניסה</Nav.Link>
                        <Nav.Link href="/signup">הרשמה</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar> */}

                <header className="homepage_header">
                    <img src={icon} id="icon" />
                    <label id="in" onClick={() => { this.setState({ displayLogIn: true }); }}>כניסה</label>
                    <label id="up" onClick={() => { this.setState({ displaySignup: true }); }}>הרשמה</label>

                    {/* איך להפעיל פונקציה עם ביינד */}
                    {/* <label id="up" onClick={this.openSignUp.bind(this)}>הרשמה</label> */}
                </header>

                <article className="article">

                    <h1 className="slogen" >הדרך החדשה <br />לרפואה משלימה</h1>
                    {/* <br /> */}
                    <b>Natural Way</b>  המאגר המקצועי והאמין ביותר
                <br />למטפלים בתחום הרפואה משלימה
                <br />אשר נותן שירותים לשני הצדדים: המטפל והמטופל...
                </article>
                {/* <Signup/> */}

                <Link to="/readMore"> <img src={btn_read_more} id="img_read_more" /> </Link>
                <Link to="/therapists"> <img src={btn_to_therapists} id="img_to_therapists" /> </Link>
                {
                /* {this.state.displaySignup && <Signup />} */}

                {/* מודל כניסה לחשבון */}
                <Modal centered show={this.state.displayLogIn} onHide={() => { this.setState({ displayLogIn: false }); }} >
                    {/* כפתור צריך להיצמד לשמאל=================================== */}
                    <Modal.Header style={{ backgroundColor: 'rgb(76, 200, 166)' }} closeButton>
                        <Modal.Title>כניסה לחשבונך</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(76, 200, 166)' }}>
                        <Login />
                    </Modal.Body>
                </Modal>

                {/* מודל הרשמה */}
                <Modal centered show={this.state.displaySignup} onHide={() => { this.setState({ displaySignup: false }); }} >
                    {/* כפתור צריך להיצמד לשמאל ====================================*/}
                    <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)' }} closeButton>
                        <Modal.Title>הרשמה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)' }}>
                        <Signup />
                    </Modal.Body>
                </Modal>

            </div>
        );
    }

}

export default HomePage;