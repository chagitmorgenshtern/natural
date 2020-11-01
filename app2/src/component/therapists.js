import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import icon from '../images/tempIcon.png'
import { Link } from 'react-router-dom'
import TherapistCard from './therapistCard'
import axios from 'axios'
import instance from '../axios';

class Therapists extends Component {
    state = {
        therapists: []
    }

    componentDidMount() {
        axios.get('https://localhost:44310/api/therapists/GetById').then(res => this.setState({ therapists: res.data }))
    }

    render() {
        return (
            <div className="therapists" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <header className="therapists_header">
                    {/* <img src={icon} id="icon" /> */}
                    <br></br><br></br>
                    <Link to="/signupTh"><label id="in">אודות</label></Link>
                    <Link to="/signup"><label id="up">המטפלים שלנו</label></Link>
                    <Link to="/signupTh"><label id="in">האזור האישי</label></Link>
                    <Link to="/signup"><label id="up">צור קשר</label></Link>
                </header>
                <h3>המטפלים שלנו</h3>
                <TherapistCard />
            </div>
        );
    }
}

export default Therapists;