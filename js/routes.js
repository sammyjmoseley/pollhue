import Root from "./components/Root";

require('./styles/styles.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'js/App';
import {
  Route,
  Router,
  browserHistory,
  Redirect
} from 'react-router'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

var attachElement = document.getElementById('main');

ReactDOM.render((<Router history={browserHistory}>
  <Route component={App}>
    <Route path={"/"} component={Root}/>
    <Route path={"/login"} component={Login}/>
    <Route path={"/dashboard"} component={Dashboard}/>
  </Route>
</Router>), attachElement);