import React from 'react';
import './documentation.css';
import Navbar from '../../components/navbar';
import Sidenav from '../../components/sidenav';
function Documentation() {
    return (
        <div>
            <div className="about">
                <div className="navbard">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Sidenav></Sidenav>
                </div>
            </div>
        </div>)
}
export default Documentation;