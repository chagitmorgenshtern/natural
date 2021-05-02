import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from './axios'
import moment from 'moment';
import './App.css';
import Login from './component/HomePage/login.js'
import Error from './component/error.js'
import Signup from './component/HomePage/signup.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TherapistCard from './component/Therapists/therapistCard';
import SignupTh from './component/HomePage/signupTh';
import HomePage from './component/HomePage/homePage';
import ReadMore from './component/ReadMore/readMore';
import Therapists from './component/Therapists/therapists';
import TherapistPage from './component/TherapistPage/therapistPage';
import Transition_background from './images/Transition_background.jpg';
import PatientArea from './component/PatientArea/patientArea'
import MyNavbar from './component/navbar';
import SignupTh_full from './component/HomePage/signupTh_full';
import ManagerArea from './component/ManagerArea/managerArea';
import PrivatArea from './component/PrivatArea/privatArea';
import TherapistArea from './component/TherapistArea/therapistArea';
//import MyProvider from './MyProvider.js'

class App extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      let now = new Date();
      let d;
      if (now.getHours() == 12) {

        d = moment(now).add(moment.duration(1, 'days'))
        const dateToReminde = d;
        //  moment(d).format('DD/MM/yyyy')
        alert(typeof (dateToReminde))
        alert(dateToReminde)
        axios.post('meets/Reminder', dateToReminde).then(res => {
          alert(res.data)
        });
      }

      //every minute
    }, 60000);
  }


  componentWillUnmount() {
    // localStorage.clear();
    localStorage.removeItem("newuser");
    clearInterval(this.interval);
  }

  render() {
    return (
      <Switch>
        {/* <MyProvider> */}
        <div className="App" style={{
          backgroundImage: `url(${Transition_background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

          <Route exact path="/" component={LoginContainer} />
          <Route component={DefaultContainer} />

        </div>
        {/* </MyProvider> */}
      </Switch>)
  }
}
export default App;

const LoginContainer = () => (
  <Route path="/" component={HomePage} />
)


const DefaultContainer = () => (
  <div>
    <MyNavbar />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/signupTh" component={SignupTh} />
    <Route path="/readMore" component={ReadMore} />
    <Route path="/therapists" component={Therapists} />
    <Route path="/therapistPage/:theapistId" component={TherapistPage} />
    <Route path="/patientArea" component={PatientArea} />
    <Route path="/signupTh_full" component={SignupTh_full} />
    <Route path="/managerArea" component={ManagerArea} />
    <Route path="/therapistArea" component={TherapistArea} />
    {/* <Route path="/privatArea" component={PrivatArea} /> */}
  </div>

)
