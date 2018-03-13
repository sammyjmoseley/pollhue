import React from "react";

export default class Root extends React.Component {
  render(){

    return (
        <div>
          <div className="row">
            <div className={"col s12"}>
              <h1>Hello World!</h1>
            </div>
          </div>
          <div className="row">
            <div className={"col s12"}>
              <a className="waves-effect waves-light btn">button</a>
            </div>
          </div>
        </div>)
  }
};