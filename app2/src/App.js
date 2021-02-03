import React from 'react';
//import logo from './logo.svg';
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


function App() {
  return (
    <Switch>
      <div className="App" style={{
        backgroundImage: `url(${Transition_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>

        <Route exact path="/" component={LoginContainer} />
        <Route component={DefaultContainer} />

      </div>
    </Switch>)
} export default App;

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
    <Route path="/therapistPage" component={TherapistPage} />
    <Route path="/patientArea" component={PatientArea} />
    <Route path="/signupTh_full" component={SignupTh_full} />
  </div>

)


