import React from 'react';
import './footer.css';
import logo from '../../images/logo.svg';
import Integrate from './integrate';
function Footer() {
    return (
        <div className="layout">
            <div className="displaysets">
                <div className="set">
                    <img src={logo} className="images" alt="Logo of ApiFlash, the website screenshot API"></img>
                    <div className="title">
                        <span className="font-weight-light">API</span><b className="ml-1">FLASH</b>
                    </div>

                </div>
                <div className="supportd">
                    <a className="spans"> documentation</a>
                    <span className="dot">•</span>
                    <a className="spans"> Contact</a>
                    <span className="dot">•</span>
                    <a className="spans"> faq</a>
                    <span className="dot">•</span>
                    <a className="spans"> about</a>
                </div>
            </div>
            <div className="details">
                <p className="paras">ApiFlash offers a clean and polished screenshot API that all modern businesses can use to enhance their products. Our underlying platform is built over Chrome and AWS Lambda to ensure scalability, stability and cost effectiveness. More than 2500 businesses use ApiFlash to make millions of screenshots per day.</p>
            </div>
            <div className="credits">
                <span className="text-muted">© ApiFlash 2017 - 2020, All rights reserved</span>
                <span className="text-white-50">
                    <span className="dot">•</span>
                    <a className="text-white-50 text-nowrap" href="/terms_of_service">
                        Terms of service
                        </a>
                    <span className="dot">•</span>
                    <a className="text-white-50 text-nowrap" href="/privacy_policy">
                        Privacy policy
                        </a>
                </span>
            </div>
        </div>
    )
}
export default Footer;