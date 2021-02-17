import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "../components/Navbar.jsx";
import Home from "../views/Home.jsx";
import Reaction from '../views/Reaction.jsx';
import AimTrainer from "../views/Aim.jsx";

import "../styles/views/Base.css";

const history = createBrowserHistory();

const Routes = (
  <Router history={history}>
    <div id="app-render">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/reaction" component={Reaction} />
      <Route path="/aim" component={AimTrainer} />
    </div>
  </Router>
);

export default Routes;
