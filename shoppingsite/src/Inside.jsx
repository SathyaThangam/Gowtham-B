import React from "react";
import "./Inside.css"
import { item } from "./reducers/reduer-items";
// import { connect } from 'react-redux';
import Thumbnail from "./Thumbnail";
// import football from "./football_PNG52789.png";
// import watch from "./watch.png";
// import ls from 'local-storage';

class Inside extends React.Component {


    render() {
        return (
            <div>
                <h3 className="headline">Store</h3>
                <div>
                    <div className="Items">
                        <div className="main">
                            {item.map((Items) => {
                                return (
                                    <Thumbnail name={Items.name} image={
                                        Items.image} price={Items.price} details={Items.details} />
                                );
                            })}

                            {/* <Thumbnail name="Casio Watch"
                            image=
                            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-4hTXbD4eUg6B-AIbg-9V9HEqicz9uaK7bIx-gmVsjwAHzPasIZUZJQ6ijQhBahnjYZpSXtDHJ_MjtPOx95MuiYSS6maXgBnEN49w7fQT7thD6FPQNa4qUg&usqp=CAc"
                            price="Rs. 2000"
                            details="hmtz-2120 model" />
                        <Thumbnail name="cosco football"
                            image=
                            "https://5.imimg.com/data5/IJ/JK/MY-11744895/playing-football-500x500.jpg"
                            price="Rs. 800"
                            details="offical fifa 2016 model" /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// function mapStateToProps(state) {
//     // console.log(state);
//     return {
//         item: state.item
//     };connect(mapStateToProps)

// }

export default (Inside);