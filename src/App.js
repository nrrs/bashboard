import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from './components/dashboard';
import About from './pages/about';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;