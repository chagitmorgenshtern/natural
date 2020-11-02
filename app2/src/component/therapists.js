import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import icon from '../images/tempIcon.png'
import { Link } from 'react-router-dom'

class Therapists extends Component {
    state = {

    }
    render() {
        return (
            <div className="therapists" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <span> 
            <header className="therapists_header">
                    {/* <img src={icon} id="icon" /> */}
                   
                    <Link to="/signupTh"><label id="labal" >אודות</label></Link>
                    <Link to="/therapists"><label id="labal">המטפלים שלנו</label></Link>
                    <Link to="/signupTh"><label id="labal">האזור האישי</label></Link>
                    <Link to="/signup"><label id="labal">צור קשר</label></Link>
                </header></span>
            <h3>המטפלים שלנו</h3>

            </div>
        );
    }
}

export default Therapists;