import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./pages/App";
import Task from "./pages/Task";

const name: string = "ichigo";

const routes = () => (
  <Router>
    <Switch>
      <Route path="/task">
        <Task name={name}></Task>
      </Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>
);

export default routes;
