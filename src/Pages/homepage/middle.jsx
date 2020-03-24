import React from 'react';
import './middle.css';
import secure from '../../images/secure.svg'
import chrome from '../../images/chromes.svg'
import scale from '../../images/scale.svg'
import view from '../../images/viewport.svg'
import simple from '../../images/simple.svg'
import time from '../../images/timing.svg'
function MiddlePage() {
    return (
        <div className="features">
            <div className="sethead">
                <h3 className="design">Features</h3>
            </div>
            <div className="displayfeatures">
                <div className="sets">
                    <img src={chrome}></img>
                    <h6 className="highlight">Chrome Rendering</h6>
                    <p className="hcontent">Up to date Chrome instances to make pixel perfect screenshots and ensure support for all modern web features.</p>
                </div>
                <div className="sets">
                    <img src={scale}></img>
                    <h6 className="highlight">Scalability & Stability</h6>
                    <p className="hcontent">Truly scalable infrastructure built on top of AWS Lambda guaranteeing stability under heavy workloads.</p>
                </div>
                <div className="sets">
                    <img src={secure}></img>
                    <h6 className="highlight">Secure Communications</h6>
                    <p className="hcontent">Full HTTPS endpoints for all plans. We take the security and privacy of your data very seriously.</p>
                </div>
                <div className="sets">
                    <img src={view}></img>
                    <h6 className="highlight">Full Page & Responsive</h6>
                    <p className="hcontent">Parameters to capture full page screenshots, mobile screenshots and precisely control the viewport size.</p>
                </div>
                <div className="sets">
                    <img src={simple}></img>
                    <h6 className="highlight">Fast & Simple</h6>
                    <p className="hcontent">Fast and easy to use API endpoints that are well documented.</p>
                </div>
                <div className="sets">
                    <img src={time}></img>
                    <h6 className="highlight">Automatic Capture Timing </h6>
                    <p className="hcontent">Automatic detection of fully loaded pages before screenshot capture.</p>
                </div>


            </div>

        </div>
    )
}
export default MiddlePage;