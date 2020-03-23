import React, { useState } from 'react';
import '../styles/dynamicdis.css';
import srd from '../images/stripeng.jpeg';
import srde from '../images/stripede.jpeg';
import apple from '../images/apple.jpeg';
import ap2048 from '../images/apple_width_2048_full_page_true.jpeg';
import app480 from '../images/apple480.jpeg';
import ado from '../images/ado.jpeg';
import adf from '../images/adobefull.jpeg';
import swa from '../images/swaze2048.jpeg';
import st from '../images/swaze2048st.jpeg';
import g1 from '../images/googlewithomni.jpeg';
import g2 from '../images/googlewithus.jpeg';
import g3 from '../images/ooglewithoutomni.jpeg'

function Dynamic() {
    const typeWriter = () => {
        var txt = 'Lorem ipsum typing effect!'; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */
        var i = 0;
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    return (
        <div>
            <div className="dis">
                <div className="textbox">
                    <div>
                        https://api.apiflash.com/v1/urltoimage
                </div>
                    <div>?<span className="curl"><b>url=
    <span id="demo"></span>
                        <span className="blinking-cursor">|</span></b></span></div>
                </div>

            </div >
            <div className="imagedis">
                <div>
                    {/* <img src={srd} alt="The Stripe website rendered using the website screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={srde} alt="The Stripe website in german rendered using the screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={apple} alt="The Apple website rendered by our screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={app480} alt="Rendering of the Apple website at 500px width by our screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={ap2048} alt="The Apple website at 2048px width rendered using the screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={ap2048} alt="Full page render of the Apple website at 2048px thanks to ApiFlash screenshot API." className="af-huge-shadow img-responsive" />
                    <img src={ado} alt="Crisp rendering by the screenshot API of the Adobe website." className="af-huge-shadow img-responsive" />
                    <img src={adf} />
                    <img src={swa} />
                    <img src={st} />
                    <img src={g2} />
                    <img src={g3} />
                    <img src={g1} /> */}
                </div>
            </div>
        </div>
    )
}
export default Dynamic;