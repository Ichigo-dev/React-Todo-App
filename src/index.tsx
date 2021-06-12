import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import App from "./pages/App";
import Task from "./pages/Task";

import './index.css';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/task" component={Task}></Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>
  ,document.getElementById("root")
);
