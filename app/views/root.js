import React, { Component } from "react";
import Api from "../services/api";
import styles from "../styles/views/home.css";

import Game from '../components/game.js';
import GameList from '../components/gameList.js';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bob", games: ['aim', 'click'] };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // Do something when loaded
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
    Api.get().then((data) => {
      console.log(data);
    });
  }

  goToReaction(e) {
    e.preventDefault();
    const reactionUrl = 'http://localhost:5000/reaction'
  }

  render() {
    const { name } = this.state;

    return (
      <div id="home-view">
        <main id="home-hero">
          <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
          <h1 className="hero-title">Hacker Benchmark</h1>
          <h3>Measure your abilities with brain games and cognitive tests.</h3>
          {/* <button id="home-start-btn">Get Started</button> */}
        </main>
        <section>
          <GameList />
        </section>
      </div>
    );
  }
}

export default Root;
