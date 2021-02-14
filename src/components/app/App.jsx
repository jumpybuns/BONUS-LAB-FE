import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReceiverPage from '../../containers/ReceiverPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <ReceiverPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
