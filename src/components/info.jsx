import React from 'react';
import '../styles/info.css';
function Infocard(props) {
    return (
        <div className="cardsetting">
            <div className="Headline">
                <small className="headon">{props.head}</small>
            </div>
            <div className="cardsetbody">
                <p className="explain">
                    {props.content}
                </p>
                <p className="subexplain">
                    {props.subcontent}
                </p>
            </div>

        </div>)
}
export default Infocard;