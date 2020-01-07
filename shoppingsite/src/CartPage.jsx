import React from "react";
import Header from "./Header"
import List from "./List"
// import Inside from "./Inside"
/* class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            purchaseDetails: [
                {
                    image: "",
                    name: "",
                    price: "",
                    details: ""

                }
            ]
        }

    }
    render() {
        return (
            <div>
            <Header cartitems={this.props.cartitems} />
            <Inside {...this.props.style="display:none;"} add={props.add}/>
            </div>
        );
    }
}*/

function CartPage(props) {
    return (
        <div>
            <Header />
            <List />


        </div>

    );
}
export default CartPage;