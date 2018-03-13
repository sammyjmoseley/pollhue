import React from "react";

import {
  browserHistory
} from 'react-router'
import toastr from "toastr";

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

  login() {
    let email = this.state.email;

    window.$
        .post('/user/login', {
              email: email
            },
            function () {
              toastr.success('Login success!');
              browserHistory.push('/dashboard');
            })
        .fail(
            function() {
              toastr.error('Login failure!')
            }
        );
  }


  render(){
    return (
        <div>
          <div>
            <div className="row">
              <div className={"col s12"}>
                <h1>Login</h1>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="email" type="email" className="validate" onChange={this.updateInputValue.bind(this)}>
                </input>
                <label htmlFor="email">Cornell Email</label>
              </div>
              <div className={"col s6"}>
                <a className="waves-effect waves-light btn" onClick={this.login.bind(this)}>Login</a>
              </div>
            </div>
          </div>
        </div>)
  }
};