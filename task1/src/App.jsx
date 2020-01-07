import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Table from "./table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      mailInput: "",
      passwordInput: "",
      current: null,
      dataArray: [
        {
          name: "sdsd",
          mail: "sds",
          password: "sd"
        }
      ]
    };
  }

  handlesubmit = event => {
    let { dataArray, current } = this.state;
    console.log("j")

    var data = {
      name: this.state.nameInput,
      mail: this.state.mailInput,
      password: this.state.passwordInput
    }
    if (current == null) {
      dataArray.push(data);
    } else {
      dataArray[current] = data;
    }

    this.setState({
      dataArray: dataArray,
      nameInput: "",
      mailInput: "",
      passwordInput: ""
    });
    event.preventDefault();
  }
  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });
  };
  delete = I => {



    let { dataArray } = this.state;
    dataArray.splice(I, 1);
    this.setState({
      dataArray: dataArray
    });
  };
  edit = I => {


    let { dataArray } = this.state;

    this.setState({
      nameInput: dataArray[I].name,
      mailInput: dataArray[I].mail,
      passwordInput: dataArray[I].password,
      current: I
    });
  };
  render() {
    //const { mailInput, passwordInput, nameInput } = this.state;
    return (
      <div id="form" className="App-header">
        <h3 className="App-link">Sign up</h3>
        <form id="signupform">
          <label>Name:</label>
          <input
            type="text"
            name="nameInput"
            value={this.state.nameInput}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter your name"
          ></input>
          <label>Email:</label>
          <input
            type="email"
            name="mailInput"
            value={this.state.mailInput}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter your Email"
          ></input>

          <label>Password:</label>
          <input
            type="password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={(e) => this.handleChange(e)}
            placeholder="create new password"
          ></input>

          <button onClick={event => this.handlesubmit(event)}>submit</button>
        </form>
        <Table dataArray={this.state.dataArray} edit={I => this.edit(I)} delete={I => this.delete(I)} />
      </div>
    );
  }
}
export default App;
