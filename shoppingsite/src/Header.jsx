import React from "react";
import "./header.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import cart from "./cart.jpg";
const mapStateToProps = (state) => {

    return {
        cartcount: state.cartcount

    }
}

class Header extends React.Component {

    render() {
        // const redirect = () => {
        //     let path = `cart`
        //     console.log(this.props);
        //   // this.props.history.push(path);
        //  

        return (
            <div className="header">
                <header className="nav-bar">
                    <img className="img-style" src="https://c8.alamy.com/comp/W1P6HD/joined-or-connected-bg-b-g-yellow-black-alphabet-letter-logo-combination-suitable-as-an-icon-design-for-a-company-or-business-W1P6HD.jpg" alt="" />
                    <h1> B & G'S Shopping</h1>
                    <h3>the special one for all your special ones</h3>
                    {/* <button className="cart-button" onClick={history.goBack()} >Home</button> */}
                    <div className="link-site" >
                        <h4>Items in Cart:{this.props.cartcount}</h4>
                        <button><Link className="style-link" to="/cart">Cart</Link></button>
                    </div>

                </header>
            </div >
        );
    }
}
export default connect(mapStateToProps)(Header);