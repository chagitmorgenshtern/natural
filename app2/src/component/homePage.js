import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import backg from '../images/background01.jpg'
import btn_read_more from '../images/btn_read_more01.png'

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
                <article className="textHomePage">

                    <h1>הדרך החדשה לרפואה משלימה</h1>
                 Natural Way המאגר המקצועי והאמין ביותר
                למטפלים בתחום הרפואה משלימה
                אשר נותן שירותים לשני הצדדים: המטפל והמטופל...
                </article>
                {/* להפוך את התמונה לקישור-באחד משניהם */}
                <img src={btn_read_more} href="/signup" />
                <button style={{ backgroundImage: `url(${btn_read_more})`, width: 250, height: 100 }}></button>

            </div>
        );
    }
}
export default HomePage;