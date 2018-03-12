import React from "react/addons";
import List from "./List";

var Root = React.createClass({
  mixins : [React.addons.PureRenderMixin],

  render : function(){

    return (
        <div>
          <div className="row">
            <div className={"col s12"}>
              <h1>Hello {this.props.name}!</h1>
            </div>
          </div>
          <div className="row">
            <div className={"col s12"}>
              <a className="waves-effect waves-light btn">button</a>
            </div>
          </div>
        </div>)
  }
});

export default Root;