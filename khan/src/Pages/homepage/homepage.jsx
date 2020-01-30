import React from 'react';
import "./homepage.css";
import Navbar from '../../components/navbar';
import axios from 'axios';

import Sidebar from "../../components/sidebar";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            isteacher: false,
            name: "",
            id: 0,
            table: []
        }
    }



    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.get(`http://localhost:5233/?role=${user.role}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            }, { token: user.token }).then(res => {
                this.setState({
                    isLogged: true,
                    name: res.data.result.name
                })


            })
        }
    }

    render() {

        return (
            <div className="page">
                <Navbar name={this.state.name} />


                <Sidebar />
            </div>
        );
    }

}
export default Homepage;