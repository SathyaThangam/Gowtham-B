import React, { useState } from 'react';
import './homepage.css';
import Navbar from '../../components/navbar';
import MiddlePage from './middle';
import Customer from './customer';
import Pricing from './pricing';
import Integrate from './integrate';
import Footer from './footer';
// import msg from '../images/msg.png';
import m from '../../images/ss.png'
import Dynamic from '../../components/dynamicdis';



function Homepage() {
    const [name, setname] = useState("");
    const handlename = (e) => {
        if (!/^https?:\/\//i.test(e.target.value)) {
            e.target.value = 'http://' + e.target.value;
        }
        setname(e.target.value);
        console.log(name);
        // else if (e.keyCode !== 8) {
        //     setname(e.target.value)

        // }
        // else if (e.keyCode === 8) {
        //     if (e.target.value === 'http://') {
        //         console.log('delete');
        //         e.target.value = '';
        //         setname(e.target.value)
        //     }

        // }
    }

    return (
        <div className="back">
            <div className="page">
                <div className="frontview">
                    <div className="about">
                        <div className="navbar" >
                            <Navbar></Navbar>
                        </div>
                        <div className="middle">
                            <div className="texts">
                                <p className="code">Simple and Powerful</p>
                                <h1 className="tagline">Website Screenshot API</h1>
                                <p className="code" >based on <b>Google Chrome</b> and <b>AWS Lambda</b></p>
                            </div>
                            <div className="nav-itemss" >
                                <a href="/register" className="nav-link btn btn-danger">
                                    Get Started Now
                                </a>
                            </div>
                        </div>
                        <div className="searchset card">
                            <div className="urlheader"><h2 className="urltitle"><b>Try it Now</b></h2><p className="urlcontent">Just enter a url below</p></div>
                            <div className="searchinput"><input className="urlinput" type="text" name="name" placeholder="http://example.com" value={name} onChange={e => handlename(e)} />
                                <button className="btnsc"><b>Take screenshot</b></button></div>

                        </div>

                        <div className="nextset">
                            <div className="dynamicdisplay">
                                <Dynamic></Dynamic>
                            </div>
                            <div className="message">
                                <img src={m}></img>
                            </div>
                            <MiddlePage></MiddlePage>
                            <Customer></Customer>
                            <Pricing></Pricing>
                            <Integrate></Integrate>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Homepage;