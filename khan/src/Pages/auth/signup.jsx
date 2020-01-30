import React from 'react';
import './signup.css';
// import { Redirect } from 'react0-router-dom';
// import history from './history';
const axios = require('axios');


// const { pool, Client } = require('pg');

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            role: "",
            stname: "",
            password: "",
            cpassword: "",
            isteacher: true,
            namearray: []


        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5233/getdetails?isTeacher=false`)
            .then(
                (res) => {
                    console.log(res);
                    if (res.data.success === true)
                        this.setState({
                            namearray: res.data.result
                        })
                    console.log(res.data);
                })

    }


    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    };

    // hello = (ele) => {

    //     console.log(pool);
    //     const connectionString = 'postgressql://postgres:rahul1095@localhost:5432/postgres';
    //     const client = new Client({
    //         connectionString: connectionString
    //     })
    //     client.connect()
    //     client.query('INSERT INTO details', (err, res) => {
    //         console.log(err, res);

    //         client.end();
    //     });
    // }
    signup = (e) => {
        var roles = document.getElementById("role").value;
        if (this.state.name === "") {
            alert("Enter your name");
        }
        else if (this.state.email === "") {
            alert("Enter your Email ID");
        }
        else if (this.state.password !== this.state.cpassword) {
            alert("passwords does not match");
        }
        else {

            if (roles === "1") {
                var work = document.getElementById('state').value;
                console.log(work);
                axios.post("http://localhost:5233/signup", {
                    name: this.state.name,
                    email: this.state.email,
                    role: roles,
                    password: this.state.password,
                    course: work
                }).then((res) => {
                    this.setState({ ...this.state, name: "bk" });
                    console.log("user registered");
                    console.log(this.props);
                    this.props.history.push({ pathname: '/', state: { isteacher: true } });


                })
            }
            else if (roles === "2") {
                var work = document.getElementById('statename').value;
                axios.post("http://localhost:5233/signup", {
                    name: this.state.name,
                    email: this.state.email,
                    role: roles,
                    password: this.state.password,
                    work: work
                }).then((res) => {
                    const users = res.data.token;
                    this.setState({ ...this.state, name: "bk" });
                    localStorage.setItem('user', users);
                    console.log("user registered");
                    console.log(this.props);
                    this.props.history.push({ pathname: '/', state: { isteacher: false } });


                })
            }
        }
        console.log(this.state.name);

    }
    call = () => {
        this.setState({
            isteacher: !this.state.isteacher
        })

        axios.get(`http://localhost:5233/getdetails?isTeacher=${this.state.isteacher}`)
            .then(
                (res) => {
                    console.log(res);
                    if (res.data.success === true)
                        this.setState({
                            namearray: res.data.result
                        })
                    console.log(res.data);
                })

    }
    render() {
        // if (this.state.redirectToLogin) {
        //     return <Redirect path={'/login'} />;
        // }

        return (
            <div className="signpage">
                <div className="container">
                    <h2 className="heading">
                        SIGNUP
                </h2>
                    <div id="signup">
                        <div className="col-25">
                            <label htmlFor="fname">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="name" name="name" placeholder=" Name" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Role</label>
                        </div>
                        <div className="col-75">
                            <select id="role" className="selectstyle" name="role" onChange={e => this.call()}>
                                <option value="1">Teacher</option>
                                <option value="2" >Student</option>

                            </select>
                        </div>
                        {!this.state.isteacher ?
                            <div className="col-25" >
                                <label htmlFor="fname">Teacher Name</label>
                            </div>
                            :
                            <div className="col-25"> <label htmlFor="fname">Course Name</label></div>}
                        {this.state.isteacher ?
                            <div className="col-75">
                                <select id="state" className="selectstyle" >
                                    {this.state.namearray.map((name, index) =>
                                        <option value={name.courseid} key={index}>{name.coursename}</option>
                                    )}
                                </select>
                            </div> :
                            <div className="col-75">
                                <select id="statename" className="selectstyle" >
                                    {this.state.namearray.map(
                                        (name, index) =>
                                            <option value={name.teacherid} key={index}>{name.name}</option>

                                    )}
                                </select>
                            </div>}

                        <div className="col-25">
                            <label htmlFor="fname">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} /><br />
                        </div>
                        <div className="col-25">
                            <label htmlFor="fname">Confirm Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" id="confirm" name="cpassword" placeholder="Confirm Password" onChange={(e) => this.handleChange(e)} /><br /></div>
                        <button className="buttonstyle" id="send" onClick={e => { this.signup(e) }} >Signup</button>
                        <p className="para">Have an account?</p>
                        <button className="buttonstyle" ><a className="lnine" href="/login">Login</a></button>
                    </div>
                </div>
            </div>

        );
    }
}
export default Signup;
