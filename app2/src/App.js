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
    <div className="App">

      <TherapistCard firstName="Sivan" lastName="Tziyonov" />
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>


    </div>
  );
}

export default App;
