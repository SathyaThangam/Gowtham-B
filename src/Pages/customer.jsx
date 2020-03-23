import React from 'react';
import './middle.css';
import asus from '../images/asus.svg';
import woorank from '../images/woorank.svg';
import brands from '../images/brandsintown.svg';
import axe from '../images/axeptio.svg';
import can from '../images/canonical.svg';
function Customer() {
    return (
        <div className="features">
            <div className="setheads">
                <h3 className="designs">Some of our customers ...</h3>
            </div>
            <div className="company">
                <div className="setlist">
                    <div className="listing">
                        <img className="clogo1" src={asus}></img>
                        <img className="clogo2" src={woorank}></img>
                        <img className="clogo3" src={brands}></img>
                        <img className="clogo4" src={axe}></img>
                        <img className="clogo5" src={can}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Customer;