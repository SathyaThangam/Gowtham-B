import React from 'react';
import '../styles/navbar.css';
import logo from '../images/logo.svg'

function Navbar() {
    return (

        <div className="set">
            <img src={logo} className="images" alt="Logo of ApiFlash, the website screenshot API"></img>
            <div className="title">
                <span className="font-weight-light">API</span><b className="ml-1">FLASH</b>
            </div>
            <div>
                <div className="collapse">
                    <div className="login">
                        <div className="nav-item ">
                            <a className="nav-link" href="/documentation">Documentation</a>
                        </div>
                        <div className="nav-item">
                            <a href="/login" className="nav-link">
                                Log in
                                </a>
                        </div>
                        <div className="nav-items" >
                            <a href="/register" className="nav-link btn btn-danger">
                                Sign up
                                </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;