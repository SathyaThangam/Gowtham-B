import React from 'react';
import '../styles/card.css';
function Card(props) {
    return (
        <div className="cardcp">
            <div className="cardheader">
                <h5 className="type">{props.title} <span className="plan">plan</span></h5>
            </div>
            <div className="cardbody">
                {props.cost ?
                    <div className="cardset">
                        <div className="cardprice">
                            <span className="do">$</span>
                            <span className="cost">{props.cost}</span>
                            <span className="mo">/month</span>

                        </div>
                        <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f1}</small>
                        </div>
                        <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f2}</small></div>
                        <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f3}</small>
                        </div>
                        <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f4}</small>
                        </div>
                        {props.f5 ? <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f5}</small></div> : <div className="splfeatures"></div>}
                        {props.f6 ? <div className="splfeatures">
                            <span className="svgset">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                            </span>
                            <small>{props.f6}</small></div> : <div className="splfeatures"></div>}

                    </div>
                    : <div></div>
                }
                <div className="widthbtm">
                    {props.type ? <small className="btms">Need to make millions of screenshots?</small> : <div></div>}
                    <button className="pbutton bbtn">{props.button}</button></div>
            </div>

        </div >
    )

}
export default Card;