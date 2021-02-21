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
        selectedAreaId: "",
        isEmptyFilter: false
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

        // debugger;
        // let therapist = [...this.state.therapistsAll];
        this.setState({ selectedCategoryId: newCategory });
        // () => { t.Categories.contain(4) }
        // if (newCategory == 0) {
        //     therapist = this.state.therapistsAll;
        // } else {
        //     therapist = therapist.filter(t => t.Categories.includes(newCategory));
        // }
        // this.setState({ filteredTherapists: therapist });
        this.filterTherapist(undefined, newCategory);

    }

    filterTherapist(newArea, newCategory) {
        let therapist = [...this.state.therapistsAll];
        const category = newCategory || this.state.selectedCategoryId;
        const area = newArea || this.state.selectedAreaId;
        let isEmpty = false;
        if (category !== "" && category !== "0") {
            therapist = therapist.filter(t => t.Categories.includes(parseInt(category)));
        }
        if (area !== "" && area !== "0") {
            therapist = therapist.filter(t => t.ServiceAreaId == area);
        }
        if (!therapist.length) {
            isEmpty = true;
        }
        this.setState({ filteredTherapists: therapist, isEmptyFilter: isEmpty });
    }

    changeArea(newArea) {
        // debugger;
        // let therapist = [...this.state.therapistsAll];
        // console.log(newArea);
        this.setState({ selectedAreaId: newArea });
        this.filterTherapist(newArea);
        // if (newArea == 0) {
        //     therapist = this.state.therapistsAll;
        // } else {
        //     therapist = therapist.filter(t => t.ServiceAreaId == newArea);
        // }
        // this.setState({ filteredTherapists: therapist });
    }

    // filtertrapists(newItem, filterItem) {
    // debugger;
    // const therapist = [...this.state.therapistsAll];
    // if (this.state.categoryId != "")
    //     therapist = therapist.filter(t => t.categoryId == this.state.categoryId);
    // if (this.state.areaId != "")
    //     therapist = therapist.filter(t => t.ServiceAreaId == this.state.areaId);
    // this.setState({ therapistsAll: therapist })
    // }

    render() {
        //=======initialize filteredTherapists in all the therapists======
        // let temp = [...this.state.therapistsAll];
        // this.setState({ filteredTherapists: temp });

        const therapistToRender = this.state.filteredTherapists.length && !this.state.isEmptyFilter ? this.state.filteredTherapists : this.state.therapistsAll;
        const therapistList = <React.Fragment>
            {this.state.isEmptyFilter ? <label>אין פריטים שתואמים לסינון שלך</label> : therapistToRender.map((t, index) => {
                // console.log(t);
                // var tt = { ...t };
                // return <TherapistCard details={tt} key={index} />
                return <TherapistCard firstName={t.FirstName} lastName={t.LastName}
                    category={t.Category} key={index} serviceArea={t.ServiceAreaId} />
            })}</React.Fragment>;

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
                </div>




            </div>
        );
    }
}

export default Therapists;