import React from 'react';
import './middle.css';
import c from '../images/imgs.svg';
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
                                <g fill="#68217A">
                                    <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zm51-41.5h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.5v-5h3.5l.9-4h-4.4v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zM102.3 66h3.8l.9-4h-3.8z">
                                    </path>
                                </g>
                            </svg>
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
