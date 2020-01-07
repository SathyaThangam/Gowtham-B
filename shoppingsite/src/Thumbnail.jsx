import React, { Component } from "react";
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./thumbnail.css"


// import selectItem from "./reducers/reducer-selected";

class Thumbnail extends Component {

    render() {
        const selectedItem = () => {
            var data = {
                name: this.props.name,
                image: this.props.image,
                price: this.props.price,
                details: this.props.details
            }
            const Data = { type: 'ITEM_SELECTED', payload: data }
            const counter = { type: 'INCREMENT' }
            this.props.dispatch(Data);
            this.props.dispatch(counter);


        }

        return (


            <div className="container" key={this.props.id}>
                <figure className="outer-figure">
                    <img alt={this.props.name} src={this.props.image}
                        className="act-image" />
                    <span className="item-name" >
                        {this.props.name}
                    </span>
                </figure>
                <div className="item-content">
                    <div className="content-body">
                        <h4 className="main-content">
                            {this.props.price}
                        </h4>
                        <div className="details">
                            {this.props.details}
                        </div>
                    </div>
                    <button onClick={() => selectedItem()} >Buy Now</button>
                    {/* <button onClick={() => cancelItem()}>cancel</button> */}
                </div>

            </div>

        );
    }

};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedItem: state.selectedItem,
    }
}
export default connect(mapStateToProps)(Thumbnail); 