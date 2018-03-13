import Root from "./components/Root";

require('./styles/styles.scss');
import React from 'react/addons';
import App from 'js/App';
import {
  Route,
  Router,
  browserHistory,
  Redirect
} from 'react-router'
import Login from "./components/Login";

var attachElement = document.getElementById('main');

React.render((<Router history={browserHistory}>
  <Route component={App}>
    <Route path={"/"} component={Root}/>
    <Route path={"/login"} component={Login}/>
  </Route>
</Router>), attachElement);