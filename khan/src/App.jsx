import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import history from './history';
import Homepage from './Pages/homepage/homepage';
import Signup from './Pages/auth/signup';
import Login from './Pages/auth/login';

// import Model from './model';

function App() {
  return (
    <Router >
      <div className="image">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

      </div>
    </Router>
  );
}

export default App;
