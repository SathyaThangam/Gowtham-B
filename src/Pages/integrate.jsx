import React from 'react';
import './middle.css';
import c from '../images/c.png';
import go from '../images/mango.png';
import java from '../images/java.png';
import node from '../images/nodejs.png';
import php from '../images/php.png';
import py from '../images/python.png'
import ruby from '../images/ruby.png';
function Integrate() {
    return (
        <div className="features">
            <div className="sethead">
                <h3 className="design">Easy to integrate with … </h3>
            </div>
            <div className="integrate">
                <div className="coldis">
                    <div className="isvg">
                        <a href="#none" className="isvgl">
                            <img src={c}></img>
                        </a>
                        <a href="#none" className="isvgl">
                            <img src={go}></img>
                        </a>
                        <a href="#none" className="isvgl">
                            <img src={java}></img>
                        </a>
                        <a href="#none" className="isvgls">
                            <img src={node}></img>
                        </a>
                        <a href="#none" className="isvglp">
                            <img src={php}></img>
                        </a>
                        <a href="#none" className="isvgl">
                            <img src={py}></img>
                        </a>
                        <a href="#none" className="isvgl">
                            <img src={ruby}></img>
                        </a>
                    </div>
                    <div className="endnote">
                        <p>Get 100 screenshots per month for free, no credit card required.</p>
                    </div>
                    <div className="nav-it" >
                        <a href="/register" className="nav-link btn btn-danger">
                            Sign up for free
                                </a>
                    </div>
                </div>


            </div>
        </div>)
}
export default Integrate;
