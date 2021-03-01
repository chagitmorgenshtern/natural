import React, { Component } from 'react';
import Transition_background from '../../images/Transition_background.jpg';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row, Container, InputGroup, Carousel, Navbar } from 'react-bootstrap';
import alovera from '../../images/alovera.jpg'
import hot_stones from '../../images/hot_stones.jpg'
import wide from '../../images/wide.jpg'
// import MyNavbar from '../navbar'
import CATEGORIES from './data.js'
import Clause from './clause.js'

class ReadMore extends Component {
  state = {

  }
  render() {

    const c_components = CATEGORIES.map((item, index) => { return <Clause id={index} imgSrc={item.imgSrc} category={item.category} text={item.text} /> });

    return (
      <div className="readMore" style={{
        backgroundImage: `url(${Transition_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>



        {/* <MyNavbar /> */}
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
          <section style={{ display: 'flex', justifyContent: 'center' }}>
            <Carousel className="carousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={wide}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 id="about_us_title">Natural Way</h1>
                  <h4 id="about_us">הדרך החדשה לרפואה משלימה</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={alovera}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 id="about_us">מטפל בתחום הרפואה המשלימה?</h2>
                  <h4 id="about_us">מקומך איתנו! הצטרף אלינו והגדל את מעגל הלקוחות שלך</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={hot_stones}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 id="about_us">מחפש מטפל מקצועי ושירותי במחיר הטוב ביותר?</h2>
                  <h4 id="about_us">הגעת למקום הנכון!</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section>
            <article id="about_us">
              <h1 id="about_us_title">Natural Way</h1><h5>
                המאגר המקצועי והאמין ביותר
                למטפלים בתחום הרפואה משלימה
אשר נותן שירותים לשני הצדדים: המטפל והמטופל.<br /> מחפש מקצוען בתחום הרפואה משלימה, אכפתי ומקצועי? הגעת למקום הנכון! כאן תוכל למצוא את המטפל המושלם עבורך מתוך המאגר האיכותי ביותר הקיים בשוק.
<br />מטפל ברמה? רוצה להחשף למעגל לקוחות איכותי? הגש בקשה להצטרף אלינו!</h5></article>
          </section>

          <section>
            <label id="title">מידע לגבי שיטות הטיפול</label>
            <label id="note">מטופל יקר, יש להתייעץ עם המטפל לבדיקת ההתאמה לשיטת הטיפול וכן לקבלת תוצאות מקסימליות . המידע המפורט להלן נועד לצרכי הסבר בלבד, ואין לעשות בו שימוש אישי. </label>
          </section>

          <section>
            {c_components}
          </section>
          {/* main_content */}
        </div>

      </div>
    );

  }
}

export default ReadMore;