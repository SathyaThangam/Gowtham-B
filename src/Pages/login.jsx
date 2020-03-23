import React from 'react';
import logo from '../images/logo.svg';
import './login.css';
function Login() {
    return (
        <div className="loginpage">
            <div className="se">
                <img src={logo} className="images" alt="Logo of ApiFlash, the website screenshot API"></img>
                <div className="title">
                    <span className="font-weight-light">API</span><b className="ml-1">FLASH</b>
                </div>
            </div>
        </div>)
}
export default Login;