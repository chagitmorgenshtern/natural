import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Col, Modal } from 'react-bootstrap';
import backg from '../../images/background01.jpg'
import btn_read_more from '../../images/btn_read_more01.png'
import btn_to_therapists from '../../images/btn01.png'
import btn_toPrivateArea from '../../images/toPrivateArea.jpg'
import icon from '../../images/--.png'
import { Link } from 'react-router-dom'
import Signup from './signup';
import Login from './login';
import arrow from '../../images/arrow.png';
import user_no from '../../images/user_no.png'

// import { NavDropdown } from 'react-bootstrap';
class HomePage extends Component {

    state = {
        displaySignup: false,
        displayLogIn: false,
        signedIn: localStorage.getItem("signedIn")
    }

    componentDidMount() {
        localStorage.setItem("signedIn", false);
    }

    // }
    // handleClose = () => setShow(false);


    render() {
        let x = false
        let btn
        if (x)
            btn = <Link to="/therapists"> <img src={btn_to_therapists} id="img_to_therapists2" className="hvr-grow" /> </Link>
        let btn_pa = <Link to="/patientArea"> <img src={btn_toPrivateArea} id="img_to_therapists2" className="hvr-grow" /> </Link>
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
                {/* <u id="link_register"></u> */}
                <header className="homepage_header">
                    <img src={icon} id="icon" />
                    <label id="label_new_t_register" className="float-right">
                        מעוניין לפרסם את שירותיך באתר?  <Link to="/signupTh" ><label id="label_new_t_register_link">לחץ כאן</label></Link>!</label>

                    {/* <label id="up" onClick={() => { this.setState({ displaySignup: true }); }}>  הרשמה  </label> */}
                    <div id="login_container">
                        {(localStorage.getItem("signedIn") == "false") ?
                            <label id="in" className="hvr-pulse-grow" onClick={() => { this.setState({ displayLogIn: true }); }}>     כניסה     </label>
                            : <label id="in" className="hvr-pulse-grow" onClick={() => { localStorage.setItem("signedIn", false); this.setState({ signedIn: localStorage.getItem("signedIn") }) }}>     יציאה     </label>}
                        <img src={user_no} />
                    </div>


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

                <Link to="/readMore"> <img src={btn_read_more} id="img_read_more" className="hvr-grow" /> </Link>


                {/* <Link to="/patientArea"><label>לאזור האישי</label></Link>
                 
                  <Link to="/patientArea"> <img src={btn_toPrivateArea} id="img_to_therapists2" className="hvr-grow" /> </Link>*/}
                {(localStorage.getItem("signedIn") == "true") ?

                    <React.Fragment>
                        <Link to="/therapists"> <img src={btn_to_therapists} id="img_to_therapists" className="hvr-grow" style={{ marginRight: '-20vw' }} /> </Link>
                        <Link to="/patientArea"> <img src={btn_toPrivateArea} id="img_to_therapists2" className="hvr-grow" /> </Link>

                    </React.Fragment>
                    : ""
                }

                {
                /* {this.state.displaySignup && <Signup />} */}

                {/* מודל כניסה לחשבון */}

                <Modal centered show={this.state.displayLogIn} onHide={() => { this.setState({ displayLogIn: false }); }} >
                    {/* כפתור צריך להיצמד לשמאל=================================== */}
                    <Modal.Header style={{ backgroundColor: 'rgb(76, 200, 166)' }} >

                        <Modal.Title>כניסה לחשבונך</Modal.Title> <br />



                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(76, 200, 166)' }}>
                        <Login />
                        <Modal.Title id="sub-title"
                            onClick={() => {
                                this.setState({ displayLogIn: false });
                                this.setState({ displaySignup: true });
                            }}>עוד לא רשום? הרשם כאן!
                   </Modal.Title>
                    </Modal.Body>
                </Modal>

                {/* מודל הרשמה */}
                <Modal id="modal_signup" centered show={this.state.displaySignup} onHide={() => { this.setState({ displaySignup: false }); }} >
                    {/* כפתור צריך להיצמד לשמאל ====================================*/}
                    <Modal.Header style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw' }} closeButton>
                        <Modal.Title>הרשמה</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: 'rgb(47,172,166)', width: '47vw', height: '65vh' }}>
                        <Signup />
                    </Modal.Body>
                </Modal>

            </div>
        );
    }

}

export default HomePage;