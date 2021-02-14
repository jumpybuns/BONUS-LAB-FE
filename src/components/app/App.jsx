import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReceiverPage from '../../containers/ReceiverPage';
import Form from '../form/Form';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Form />
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
