import './App.css';
import React, { Component } from 'react';
import Signinpage from './hoc/SignInPage/Signinpage';
import Aux from './hoc/Aux/Aux';
import {Route, Switch, withRouter} from 'react-router-dom';
import HomePage from './hoc/HomePage/HomePage';

//Add Routers Here
class App extends Component {
  render () {
    return (
      <Aux>
        <Switch>
          <Route path = '/' component = {HomePage} history = {this.props.history}/>
          <Route path = '/home' exact component = {Signinpage} history = {this.props.history}/>
        </Switch>
      </Aux>
      //Add switch Router here
    );
  }
}

export default withRouter(App);
