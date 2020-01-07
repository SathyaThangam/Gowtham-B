import React from "react";
//import logo from "./logo.svg";
import "./App.css";

class Table extends React.Component {
    render() {
        return (
            <table className="tablee">
                <thead>
                    <tr>
                        <th>name
                        </th>
                        <th>mail
                        </th>
                        <th>
                            password
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataArray.map((data, I) => {
                        return (
                            <tr key={I}>
                                <td>{data.name}</td>
                                <td>{data.mail}</td>
                                <td>{data.password}</td>
                                <td>
                                    <button onClick={() => this.props.edit(I)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props.delete(I)}>delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
export default Table;
