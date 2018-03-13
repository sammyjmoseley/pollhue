require('./styles/styles.scss');
import React from 'react/addons';
import Root from './components/Root';
import Materialize from 'materialize-css'
import $ from 'jquery';

window.$ = $;
// window.Materialize = require('react-materialize');
window.Hammer = require('hammerjs');


export default class App  extends React.Component {

  render(){

    return (
        <div>
          <div>
            <div className="row">
              <div className={"col s12"}>
                <h1>CS4780</h1>
              </div>
            </div>
          </div>
          {this.props.children}
        </div>)
  }
}

$(document).ready(function() {
  Materialize.updateTextFields();
});