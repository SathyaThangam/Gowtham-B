import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header"
import Inside from "./Inside"


function HomePage(props) {
    console.log(props);
    return (
        <div>
            <Header history={props} />
            <div className="struct">
                <Inside />
            </div>
        </div>

    );
}

export default HomePage;
