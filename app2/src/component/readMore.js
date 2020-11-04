import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import { Link } from 'react-router-dom';


class ReadMore extends Component {
    state = {

    }
    render() {
        return (
            <div className="readMore" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                 <header className="therapists_header">
                    {/* <img src={icon} id="icon" /> */}
                   
                    <Link to="/signupTh"><label id="labal" >אודות</label></Link>
                    <Link to="/therapists"><label id="labal">המטפלים שלנו</label></Link>
                    <Link to="/signupTh"><label id="labal">האזור האישי</label></Link>
                    <Link to="/signup"><label id="labal">צור קשר</label></Link>
                </header>
            <center><h4 className="TitleReadMore">אז מה האתר שלנו בעצם מציע....?  </h4></center>
            
           
            
            
            
            
            
            
            </div>
        );
    
    }
}

export default ReadMore;