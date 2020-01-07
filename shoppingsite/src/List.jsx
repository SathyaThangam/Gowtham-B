import React from 'react';
import { connect } from 'react-redux';
import "./List.css";
import { item } from './reducers/reduer-items';
// import { item } from './reducers/reduer-items';
// import { reduce } from "./reducers/reducer-selected"
//import selectItem from "./actions/index";
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        item: state.item
    }
}
class List extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(reduce);
    //     // this.state={
    //     //     name:reduce.name,

    // }

    render() {

        return (
            <div>
                <h2>Items In Cart</h2>
                <div>
                    <table>
                        <thead>
                            <tr >

                                <th>
                                    Item Name
</th>
                                <th>
                                    Price
</th>
                                <th>
                                    Details
</th>
                                <th>
                                    Quantity
</th>
                                <th>
                                    preview
</th>
                            </tr>

                        </thead>
                        <tbody>

                            {this.props.item.item.map((Items) => {
                                return (
                                    <tr>


                                        <td>{Items.name}</td>
                                        <td>{Items.price}</td>
                                        <td>{Items.details}</td>
                                        <td>1</td>
                                        <td><img src={Items.image} alt={item.name} className="img-list"></img></td>
                                    </tr>
                                );
                            })}

                        </tbody>




                    </table>
                </div>
            </div>

        );

    }
}

export default connect(mapStatetoProps)(List);