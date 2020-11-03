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
        axios.get('https://localhost:44310/api/therapists/GetAll').then(res => this.setState({ therapists: res.data }))
        const t_Component= this.state.therapists.map(x=> <TherapistCard firstName={x.FirstName} lastName={x.LastName} category={x.Category} serviceArea={x.ServiceArea}/>)
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


                <header className="therapists_header">
                    {/* <img src={icon} id="icon" /> */}
                    <br></br><br></br>
                    <Link to="/signupTh"><label id="in">אודות</label></Link>
                    <Link to="/signup"><label id="up">המטפלים שלנו</label></Link>
                    <Link to="/signupTh"><label id="in">האזור האישי</label></Link>
                    <Link to="/signup"><label id="up">צור קשר</label></Link>
                </header>
                <h3>המטפלים שלנו</h3>

               
               

            </div>
        );
    }
}

export default Therapists;