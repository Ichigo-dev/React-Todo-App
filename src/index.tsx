import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./pages/App";
import Task from "./pages/Task";

import './index.css';

const name: string = "ichigo";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/task">
        <Task name={name}></Task>
      </Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>
  ,document.getElementById("root")
);
