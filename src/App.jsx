import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Pages/homepage';
import Login from './Pages/login';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
