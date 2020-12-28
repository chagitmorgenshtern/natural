import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class MyNavbar extends Component {
    render() {
        return (
            <header className="therapists_header">
                {/* <img src={icon} id="icon" /> */}

                <Link to="/readmore"><label className="navbar_label" >אודות</label></Link>
                <Link to="/therapists"><label className="navbar_label">המטפלים שלנו</label></Link>
                <Link to="/"><label className="navbar_label">לדף הבית</label></Link>
                <Link to="/signupTh"><label className="navbar_label">צור קשר</label></Link>
            </header>
        )
    }

}
