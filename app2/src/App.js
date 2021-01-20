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

function App() {
  return (
    <center>
      <div className="App" style={{
        backgroundImage: `url(${Transition_background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* <Switch>

        </Switch> */}
        {/* <MyNavbar /> */}
        {/* <center>
        <TherapistCard firstName="Sivan" lastName="Tziyonov" />
      </center> */}

        <Switch>

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupTh" component={SignupTh} />
          <Route path="/readMore" component={ReadMore} />
          <Route path="/therapists" component={Therapists} />
          <Route path="/therapistPage" component={TherapistPage} />
          <Route path="/patientArea" component={PatientArea} />
          <Route path="/" component={HomePage} />
          {/*  <Route component={Error} /> */}
        </Switch>


      </div></center>
  )
}

export default App;

//===================================
//hide navbar
//===================================
// function App() {
//   return (
//     <Switch>
//       <div className="App" style={{
//         backgroundImage: `url(${Transition_background})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//       }}>

//         <Route exact path="/" component={LoginContainer} />
//         <Route component={DefaultContainer} />

//       </div>
//     </Switch>)
// } export default App;

// const LoginContainer = () => (
//   <div className="container" style={{
//     backgroundImage: `url(${Transition_background})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   }}>
//     <Route path="/" component={HomePage} />
//   </div>
// )


// const DefaultContainer = () => (

//   <div className="container" style={{
//     width: '100vw',

//     backgroundImage: `url(${Transition_background})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   }}>
//     <MyNavbar />
//     <Route path="/login" component={Login} />
//     <Route path="/signup" component={Signup} />
//     <Route path="/signupTh" component={SignupTh} />
//     <Route path="/readMore" component={ReadMore} />
//     <Route path="/therapists" component={Therapists} />
//     <Route path="/therapistPage" component={TherapistPage} />
//     <Route path="/patientArea" component={PatientArea} />
//   </div>

// )


