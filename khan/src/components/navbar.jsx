import React from 'react';
import "../styles/navbar.css";
import axios from 'axios';
import Search from './search';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropis: false,
            search: "",
            isLogged: localStorage.getItem('user') ? true : false,
            isteacher: false,
            name: "",
            work: "",
            Subject: [],
            Courses: []
        }
    }

    getRefined = (table) => {

        let Courses = [], Subject = [], obb = {}
        table.forEach(element => {
            if (!Courses.includes(element.courseheader))
                Courses.push(element.courseheader)
            obb = Subject[Courses.indexOf(element.courseheader)]
            if (obb)
                obb.list.push({ name: element.coursename, id: element.courseid })
            else
                obb = { list: [{ name: element.coursename, id: element.courseid }] }
            Subject[Courses.indexOf(element.courseheader)] = obb
        });
        this.setState({
            Subject, Courses
        })
    }
    courseassign = (e, id) => {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(id);
        if (this.state.isteacher != true) {
            axios.post(`http://localhost:5233/select`,
                { course: id, token: user.token },
                {
                    headers: {
                        contentType: 'application/json',
                        authorization: `Bearer ${user.token}`
                    }
                }).then(response => {
                    console.log(response)
                    if (response.data.success === true) {
                        console.log(response.data.result)
                        alert("course has been added")
                    }
                }).catch(error => {
                    console.log(error.response)
                });
        }
    }

    componentDidMount() {

        axios.get("http://localhost:5233/coursed")
            .then(res => {
                console.log(res.data.result);
                this.getRefined(res.data.result)
            })
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role === 1) {
            this.state.isteacher = true
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.name != prevProps.name)
            this.setState({
                name: this.props.name
            })

    }

    drop = () => {
        this.setState({
            dropis: !this.state.dropis
        })

    }
    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value },
            () => {
                if (this.state.search === ``) {
                    this.setState({ displaysearch: false })
                }
            });
    };
    logout = () => {
        this.setState({
            isLogged: false,
            name: ""
        });
        localStorage.removeItem('user');
        // window.location.reload(false);


    }
    render() {
        var displaystyle = {
            display: this.state.dropis ? "block" : "none"
        }
        var buttonclass = this.state.dropis ? "active" : " "
        return (
            <div>
                <div className="navbar">
                    <button className={`button_bar ${buttonclass}`} onClick={e => this.drop()} ><span>Courses</span> <span ><i className={`${buttonclass}s fa fa-caret-down`}></i></span></button>

                    <Search />
                    <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStVPZiBKWQ3XgSGZ7Xgp3G_3qAE2kXAaFgk9kDcMMbvxGA9mxO" />
                    <div className="switch">
                        {
                            this.state.isLogged ?
                                <div className="user" >
                                    <p> {this.state.isteacher ? <img className="imagesize" src="/teacher.svg" /> : <img className="imagesize" src="/student.svg" />}<p>{this.state.name}</p>
                                        {/* your {this.state.isteacher ? ` student is ${this.state.work}` :  <i class="fas fa-chalkboard-teacher"></i>`${this.state.work}`}</p> */}</p>
                                    <button className="button_bar" onClick={e => this.logout()} >logout</button>
                                </div>
                                : (<div>
                                    <button className="button_bar"><a href="/login" className="lines">Login</a></button>
                                    <button className="button_bar"><a href="/signup" className="lines">Signup</a></button><br />
                                </div>)
                        }
                    </div>
                </div>
                <div className="model" style={displaystyle}>
                    <div className="displaylist">

                        {/* <h2 className="courseh">Maths</h2>
                            <ul className='list'>
                                <li>maths 6th</li>
                                <li>maths 7th</li>
                                <li>permutation and combination</li>
                                <li>differenciation and integration</li>
                                <li>probability</li>
                            </ul> */}
                        {this.state.Courses.map((data, index) =>
                            <div key={index} className="displayc">
                                <h2 className="courseh">{data}</h2>
                                <ul className="list">
                                    {this.state.Subject[index].list.map((data, index) =>
                                        <li key={index} onClick={e => this.courseassign(e, data.id)}>{data.name}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }


}
export default Navbar;