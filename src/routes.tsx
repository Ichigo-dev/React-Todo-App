import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import App from "./pages/App";
import Task from "./pages/Task";

const routes = () => (
 <Switch>
   <Route exact path="/" component={App}></Route>
   <Route path="/task" component={Task}></Route>
   <Route component={App} />
 </Switch>
);

export default routes;
