import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Pages/homepage/homepage';
import Login from './Pages/login/login';
import Firebase from 'firebase';
import Documentation from './Pages/documentation/documentation';
import Signup from './Pages/login/signup';

function App() {
  Firebase.initializeApp({
    apikey: "AIzaSyCM9seGuWBRJ-W2ZbZ51zhiCLWZ-a0eQ68",
    authDomain: "apiflash1.web.app"
  })
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/documentation" component={Documentation}></Route>
      </Switch>
    </Router>
  );
}

export default App;
