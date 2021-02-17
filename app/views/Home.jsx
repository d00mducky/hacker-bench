import React, { Component } from "react";
import Api from "../services/api";
import styles from "../styles/views/Home.css";

import GameList from '../components/GameList.jsx';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Do something when loaded
  }

  render() {
    const { name } = this.state;

    return (
      <div id="home-view">
        <main id="home-hero">
          <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
          <h1 className="hero-title">Hacker Benchmark</h1>
          <h3>Measure your abilities with brain games and cognitive tests.</h3>
        </main>
        <GameList />
      </div>
    );
  }
}

export default Root;
