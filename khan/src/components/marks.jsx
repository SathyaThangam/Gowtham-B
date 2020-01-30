import React from 'react';
import axios from 'axios';
import "../styles/marks.css"
// var role = JSON.parse(localStorage.getItem('user').role);
class Marks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataarray: {},
            role: false,
            mark: [],
            editArray: [],
            ischange: false

        }
    }
    markcall = (data) => {
        let { mark } = this.state;
        data.forEach(element => {
            mark.push(element.marks)

        });
        console.log(mark)
        this.setState({
            mark
        })
        console.log(this.state.mark);
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user != null) {

            axios.get(`http://localhost:5233/marks?isrole=${user.role}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            })
                .then(res => {
                    var data = res.data.result
                    if (res.data.success === true && user.role == '1') {
                        this.setState({
                            dataarray: data,
                            role: true,
                        })
                        this.markcall(data);

                    }
                    else {
                        this.setState({
                            dataarray: data,
                            role: false

                        })
                        // this.markcall(data);
                    }

                })
        }
    }
    undo = (index) => {
        let { editArray } = this.state;
        let { dataarray } = this.state
        let { mark } = this.state
        mark[index] = dataarray[index].marks
        editArray.splice(editArray.indexOf(index), 1)
        this.setState({
            editArray, mark
        })
    }
    change = (index) => {
        let { editArray } = this.state;
        let { dataarray } = this.state
        let { mark } = this.state

        editArray.splice(editArray.indexOf(index), 1);
        console.log(editArray)
        axios.post(`http://localhost:5233/changemark`, { mark: mark[index], id: dataarray[index].userid }).then(res => {
            console.log("hai")
            dataarray[index].marks = mark[index]
            this.setState({
                editArray,
                dataarray
            })
        })
        // window.location.reload(false);
    }
    edit = (index, e) => {
        console.log(index)
        let { editArray } = this.state;
        editArray.push(index)
        this.setState({
            editArray
        })


    }

    bindData = event => {
        let { mark } = this.state
        mark[event.target.name] = event.target.value
        this.setState({
            mark
        })

    }

    render() {

        return (
            <div>

                <table id='customers'>
                    <thead></thead>
                    <tbody>
                        {this.state.role ? (<div><tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Edit</th>
                        </tr>
                            {this.state.dataarray.map(
                                (data, index) =>
                                    <tr key={index}><td>{data.userid}</td>
                                        <td>{data.name}</td>
                                        <td>
                                            {this.state.editArray.includes(index) ? (
                                                <input name={index} onChange={e => this.bindData(e)} value={this.state.mark[index]} type="number" />) : this.state.mark[index]}
                                        </td>
                                        <td>
                                            {
                                                this.state.editArray.includes(index) ?
                                                    <div><button className="buttonstyle" onClick={e => this.change(index)}>Change</button>
                                                        <button className="buttonstyle" onClick={e => this.undo(index)}>undo</button></div>
                                                    :
                                                    <button className="buttonstyle" onClick={(e) => this.edit(index, e)}>Edit</button>

                                            }
                                        </td></tr>)} </div>)

                            : <div>

                            </div>
                        }
                        <tr>

                        </tr>
                    </tbody>

                </table>

            </div >
        )
    }


}
export default Marks;