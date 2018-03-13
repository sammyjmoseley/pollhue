import React from "react";

export default class Root extends React.Component {
  render(){

    return (
        <div>
          <div className="row">
            <div className={"col s12"}>
              <h3>Polling Website</h3>
            </div>
          </div>
          <div className="row">
            <div className={"col s12"}>
              <a className="waves-effect waves-light btn" href={'/login'}>login</a>
            </div>
          </div>
        </div>)
  }
};