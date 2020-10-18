import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './component/login.js'
import Error from './component/error.js'
import Signup from './component/signup.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TherapistCard from './component/therapistCard';

function App() {
  return (
    <center>
      <div className="App">
        {/* <center>
        <TherapistCard firstName="Sivan" lastName="Tziyonov" />
      </center> */}

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/*  <Route component={Error} /> */}
        </Switch>


      </div></center>
  )
}

export default App;
