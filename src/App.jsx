import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Pages/homepage/homepage';
import Login from './Pages/login/login';
import Documentation from './Pages/documentation/documentation';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/documentation" component={Documentation}></Route>
      </Switch>
    </Router>
  );
}

export default App;
