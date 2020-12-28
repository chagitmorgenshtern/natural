import React, { Component } from 'react';
import Transition_background from '../../images/Transition_background.jpg';
import icon from '../../images/tempIcon.png'
import { Link } from 'react-router-dom';
import TherapistCard from './therapistCard';
import axios from '../../axios'
import { Form } from 'react-bootstrap';
import MyNavbar from '../navbar'
// import TherapistCard from './therapistCard';


class Therapists extends Component {

    state = {
        therapists: [],
        categories: [],
        serviceAreas: []
    }

    componentDidMount() {
        debugger;
        axios.get('therapists/GetAll')
            .then(res => {
                console.log(res);
                this.setState({ therapists: [...res.data] });
            });


        axios.get('categories/GetAllCategories')
            .then(res => {
                console.log(res);
                this.setState({ categories: [...res.data] });
            })


        axios.get('serviceAreas/GetAllServiceAreas')
            .then(res => {
                console.log(res);
                this.setState({ serviceAreas: [...res.data] });
            })
    }


    render() {

        const therapistList = this.state.therapists.map((t, index) => {
            return <TherapistCard firstName={t.FirstName} lastName={t.LastName}
                category={t.Category} key={index} />
        });
        // serviceArea={t.ServiceAreaId}

        const categoriesList = this.state.categories
            .map((x, index) => { return <option key={index} id={x.CategoryId}>{x.CategoryName}</option> });

        const serviceAreasList = this.state.serviceAreas
            .map((x, index) => { return <option key={index} id={x.SAId}>{x.SAName}</option> });

        return (
            <div className="therapists" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                <MyNavbar />
                <h3 id="therapist_title">המטפלים שלנו</h3>
                <label id="select_label1">סנן לפי קטגוריה:</label>
                <Form.Control className="selectbox" id="selectbox1" as="select" custom>
                    <option id="0">הכל</option>
                    {categoriesList}
                    {/* <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option> */}
                </Form.Control>

                <label id="select_label2">סנן לפי אזור בארץ:</label>
                <Form.Control className="selectbox" id="selectbox2" as="select" custom>
                    <option id="0">הכל</option>
                    {serviceAreasList}
                    {/* <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option> */}
                </Form.Control>
                <div className="therapists_table">
                    {therapistList}
                    <TherapistCard firstName="1 שם מלא" lastName="" />
                    <TherapistCard firstName="2 שם מלא" lastName="" />
                    <TherapistCard firstName="3 שם מלא" lastName="" />
                    <TherapistCard firstName="4 שם מלא" lastName="" />
                    <TherapistCard firstName="5 שם מלא" lastName="" />
                    <TherapistCard firstName="6 שם מלא" lastName="" />
                    <TherapistCard firstName="7 שם מלא" lastName="" />
                    <TherapistCard firstName="8 שם מלא" lastName="" />
                    <TherapistCard firstName="9 שם מלא" lastName="" />
                    <TherapistCard firstName="10 שם מלא" lastName="" />
                    <TherapistCard firstName="11 שם מלא" lastName="" />
                    <TherapistCard firstName="12 שם מלא" lastName="" />
                    <TherapistCard firstName="13 שם מלא" lastName="" />

                </div>




            </div>
        );
    }
}

export default Therapists;