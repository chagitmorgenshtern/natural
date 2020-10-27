import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import backg from '../images/background01.jpg'
import btn_read_more from '../images/btn_read_more01.png'
import btn_to_therapists from '../images/btn01.png'
import { Link } from 'react-router-dom'
class HomePage extends Component {
    state = {

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
                <article className="article">

                    <h1 className="slogen" >הדרך החדשה <br />לרפואה משלימה</h1>
                    {/* <br /> */}
                    <b>Natural Way</b>  המאגר המקצועי והאמין ביותר
                <br />למטפלים בתחום הרפואה משלימה
                <br />אשר נותן שירותים לשני הצדדים: המטפל והמטופל...
                </article>
                {/* להפוך את התמונה לקישור-באחד משניהם */}
                <Link to="/signup"> <img src={btn_read_more} id="img_read_more" /> </Link>

                <Link to="/signupTh"> <img src={btn_to_therapists} id="img_to_therapists" /> </Link>
            </div>
        );
    }
}
export default HomePage;