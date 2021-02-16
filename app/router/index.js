import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "../components/navbar";
import Root from "../views/root";
import Home from "../views/home";
import About from "../views/about";
import AimTrainer from "../views/aim";

import "../styles/views/base.css";

const history = createBrowserHistory();

const Routes = (
  <Router history={history}>
    <div id="app-render">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/root" exact component={Root} />
      <Route path="/about" component={About} />
      <Route path="/aim" component={AimTrainer} />
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
      <div>
        <h1>Dummy Data</h1>
      </div>
    </div>
  </Router>
);

export default Routes;
