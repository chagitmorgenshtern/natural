import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import icon from '../images/tempIcon.png'
import { Link } from 'react-router-dom';
import TherapistCard from './therapistCard';
import axios from '../axios'

// import TherapistCard from './therapistCard';


class Therapists extends Component {
    state = {
        therapists: []
    }

    componentDidMount() {
        axios.get('therapists/GetAll')
            .then(res => {
                console.log(res);
                this.setState({ therapists: [...res.data] });
            })


    }


    render() {
        const therapistList = this.state.therapists.map((t, index) => {
            return <TherapistCard firstName={t.FirstName} lastName={t.LastName}
                category={t.Category} serviceArea={t.ServiceArea} key={index} />
        });
        return (
            <div className="therapists" style={{
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
                <h3>המטפלים שלנו</h3>
                <div className="therapists_table">
                    {therapistList}
                </div>
                <TherapistCard />



            </div>
        );
    }
}

export default Therapists;