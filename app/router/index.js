import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "../components/navbar";
import Root from "../views/root";
import Reaction from '../views/reaction';
import Home from "../views/home";
import About from "../views/about";
import AimTrainer from "../views/aim";

import "../styles/views/base.css";

const history = createBrowserHistory();

const Routes = (
  <Router history={history}>
    <div id="app-render">
      <Navbar />
      <Route path="/" exact component={Root} />
      <Route path="/root" exact component={Home} />
      <Route path="/reaction" component={Reaction} />
      <Route path="/aim" component={AimTrainer} />
    </div>
  </Router>
);

export default Routes;
