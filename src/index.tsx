import ReactDOM from 'react-dom';

import Router from "./routes"

import './index.css';

ReactDOM.render(
  <div>
    <header>
      <h1>Header</h1>
    </header>
    <Router></Router>
  </div>
  ,document.getElementById("root")
);
