import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Homepage";
import CartPage from "./CartPage";
import history from "./history";

class App extends React.Component {
  render() {

    return (
      <Router >
        <Route exact path={"/"}  >
          <HomePage history={history} />
        </Route>
        <Route exact path={"/cart"}  >
          <CartPage history={history} />
        </Route>
      </Router>
    );
  }
}
export default App;
