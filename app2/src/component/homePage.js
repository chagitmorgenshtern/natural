import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import backg from '../images/background01.jpg'
import btn_read_more from '../images/btn_read_more01.png'
import btn_to_therapists from '../images/btn01.png'
import icon from '../images/tempIcon.png'
import { Link } from 'react-router-dom'
import Signup from './signup';
import Login from './login';
// import { NavDropdown } from 'react-bootstrap';
class HomePage extends Component {

    state = {
        displaySignup: false,
        displayLogIn: false
    }

    openSignUp() {
        alert("cscsc");
        this.setState({ displaySignup: true });

    }
    openLogIn() {
        alert("1323");
        this.setState({ displayLogIn: true });

    }
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
                    <label id="in" onClick={this.openLogIn.bind(this)}>כניסה</label>
                   <label id="up" onClick={this.openSignUp.bind(this)}>הרשמה</label>
                </header>

                <article className="article">

                    <h1 className="slogen" >הדרך החדשה <br />לרפואה משלימה</h1>
                    {/* <br /> */}
                    <b>Natural Way</b>  המאגר המקצועי והאמין ביותר
                <br />למטפלים בתחום הרפואה משלימה
                <br />אשר נותן שירותים לשני הצדדים: המטפל והמטופל...
                </article>
                {/* <Signup/> */}
                {/* להפוך את התמונה לקישור-באחד משניהם */}
                <Link to="/readMore"> <img src={btn_read_more} id="img_read_more" /> </Link>
                <Link to="/therapists"> <img src={btn_to_therapists} id="img_to_therapists" /> </Link>
              {this.state.displaySignup && <Signup />} 
               {this.state.displayLogIn && <Login />} 
            </div>
        );
    }

}

export default HomePage;