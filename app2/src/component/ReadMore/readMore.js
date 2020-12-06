import React, { Component } from 'react';
import Transition_background from '../../images/Transition_background.jpg';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row, Container, InputGroup, Carousel } from 'react-bootstrap';
import alovera from '../../images/alovera.jpg'
import hot_stones from '../../images/hot_stones.jpg'
import wide from '../../images/wide.jpg'


class ReadMore extends Component {
  state = {

  }
  render() {
    return (
      <div className="readMore" style={{
        backgroundImage: `url(${Transition_background})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
      }}>
        <header className="therapists_header">
          {/* <img src={icon} id="icon" /> */}


          <Link to="/readmore"><label id="labal" >אודות</label></Link>
          <Link to="/therapists"><label id="labal">המטפלים שלנו</label></Link>
          <Link to="/"><label id="labal">לדף הבית</label></Link>
          <Link to="/signupTh"><label id="labal">צור קשר</label></Link>
        </header>
        {/* <center><h4 className="TitleReadMore">אז מה האתר שלנו בעצם מציע....?  </h4></center> */}
        {/* <div className="inf_therapist"> 
               <center>  <p> מטפל חדש בתחום הרפואה הטבעית?<br/> 
                     מקומך כאן איתנו!<br/> 
                    תוכל להרשם בכפתור ממש כאן למטה<br/> 
                    כמה פרטים טכניים- ואת/ה בפנים!!!<br/> 
                    מעכשיו- כל המטופלים באתר יוכלו להנות משירותייך.<br/> 
                     בהצלחה!
                </p>
                <button>  הרשמה </button>
                </center>
                </div>  */}
        <div className="main_content">
          <section>
            <Carousel className="carousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={wide}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={alovera}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hot_stones}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section>


          </section>

          {/* main_content */}
        </div>

      </div>
    );

  }
}

export default ReadMore;