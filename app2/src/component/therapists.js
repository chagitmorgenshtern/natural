import React, { Component } from 'react';
import Transition_background from '../images/Transition_background.jpg';
import icon from '../images/tempIcon.png'
import { Link } from 'react-router-dom';
import TherapistCard from './therapistCard';
import axios from '../axios'
import { Form } from 'react-bootstrap';
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

                    <Link to="/readmore"><label id="labal" >אודות</label></Link>
                    <Link to="/therapists"><label id="labal">המטפלים שלנו</label></Link>
                    <Link to="/signupTh"><label id="labal">האזור האישי</label></Link>
                    <Link to="/signup"><label id="labal">צור קשר</label></Link>
                </header>
                <h3 id="therapist_title">המטפלים שלנו</h3>
                <Form.Control id="selectbox1" as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                <Form.Control id="selectbox2" as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                <div className="therapists_table">
                    {therapistList}
                    <TherapistCard firstName="1" />
                    <TherapistCard firstName="2" />
                    <TherapistCard firstName="3" />
                    <TherapistCard firstName="4" />
                    <TherapistCard firstName="5" />
                    <TherapistCard firstName="6" />
                    <TherapistCard firstName="1" />
                    <TherapistCard firstName="2" />
                    <TherapistCard firstName="3" />
                    <TherapistCard firstName="4" />
                    <TherapistCard firstName="5" />
                    <TherapistCard firstName="6" />

                </div>




            </div>
        );
    }
}

export default Therapists;