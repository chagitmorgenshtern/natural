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
        therapistsAll: [],
        filteredTherapists: [],
        categories: [],
        serviceAreas: [],
        selectedCategoryId: "",
        selectedAreaId: ""
    }


    componentDidMount() {

        axios.get('therapists/GetAll')
            .then(res => {
                console.log(res);
                this.setState({ therapistsAll: [...res.data] });
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



    changeCategory(newCategory) {

        debugger;
        let traoist = [...this.state.filteredTherapists];
        this.setState({ selectedCategoryId: newCategory });
        // () => { t.Categories.contain(4) }
        traoist = traoist.filter(t => t.Categories.length > 1);
        this.setState({ filteredTherapists: traoist });


    }
    changeArea(newArea) {
        // debugger;
        let traoist = [...this.state.filteredTherapists];
        console.log(newArea);
        this.setState({ selectedAreaId: newArea });
        traoist = traoist.filter(t => t.ServiceAreaId == newArea);
        this.setState({ filteredTherapists: traoist });
    }

    // filtertrapists(newItem, filterItem) {
    // debugger;
    // const traoist = [...this.state.therapistsAll];
    // if (this.state.categoryId != "")
    //     traoist = traoist.filter(t => t.categoryId == this.state.categoryId);
    // if (this.state.areaId != "")
    //     traoist = traoist.filter(t => t.ServiceAreaId == this.state.areaId);
    // this.setState({ therapistsAll: traoist })
    // }

    render() {
        //=======initialize filteredTherapists in all the therapists======
        // let temp = [...this.state.therapistsAll];
        // this.setState({ filteredTherapists: temp });

        const therapistToRender = this.state.filteredTherapists.length ? this.state.filteredTherapists : this.state.therapistsAll;
        const therapistList = therapistToRender.map((t, index) => {
            // console.log(t);
            // var tt = { ...t };
            // return <TherapistCard details={tt} key={index} />
            return <TherapistCard firstName={t.FirstName} lastName={t.LastName}
                category={t.Category} key={index} serviceArea={t.ServiceAreaId} />
        });


        const categoriesList = this.state.categories
            .map((x, index) => { return <option key={index} id={x.CategoryId} value={x.CategoryId}>{x.CategoryName}</option> });

        const serviceAreasList = this.state.serviceAreas
            .map((x, index) => { return <option key={index} id={x.SAId}>{x.SAName}</option> });

        return (
            <div className="therapists" style={{
                backgroundImage: `url(${Transition_background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                {/* <MyNavbar /> */}
                <h3 id="therapist_title">המטפלים שלנו</h3>
                <label id="select_label1">סנן לפי קטגוריה:</label>
                <Form.Control className="selectbox" id="selectbox1" as="select" custom onChange={(event) => this.changeCategory(event.target.selectedOptions[0].id)}>
                    <option id="0">הכל</option>
                    {categoriesList}

                </Form.Control>

                <label id="select_label2">סנן לפי אזור בארץ:</label>
                <Form.Control className="selectbox" id="selectbox2" as="select" custom onChange={(event) => this.changeArea(event.target.selectedOptions[0].id)}>
                    <option id="0">הכל</option>
                    {serviceAreasList}

                </Form.Control>
                <div className="therapists_table">
                    {therapistList}
                    <TherapistCard />
                    {/* <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard />
                    <TherapistCard /> */}

                </div>




            </div>
        );
    }
}

export default Therapists;