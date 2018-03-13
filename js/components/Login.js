import React from "react/addons";
import List from "./List";

export default class Login extends React.Component {
  init() {
    this.state = {
      email : ''
    }
  }

  updateInputValue(evt) {
    console.log(evt.target.value);
    this.setState({
      email: evt.target.value
        }
    );
  }


  render(){
    return (
        <div>
          <div className="row">
            <div className={"col s12"}>
              <h1>Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" onChange={this.updateInputValue}>
                <label htmlFor="email">Cornell Email</label>
              </input>
            </div>
            <div className={"col s6"}>
              <a className="waves-effect waves-light btn">Login</a>
            </div>
          </div>
        </div>)
  }
};