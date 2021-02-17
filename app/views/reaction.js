import React, { Component } from "react";
import Api from "../services/api";
import styles from "../styles/views/reaction.css";

import GameList from '../components/gameList.js';

class Reaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      games: ['aim', 'click'],
      playing: false,
      waiting: false,
      finished: false,
      startTime: null,
      stopTime: null,
      currentTime: null,
      bestTime: 1000000000
    };

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

  randTimer() {
    let rand = (Math.random() * (8 - 2) + 2) * 1000;
    setTimeout(() => {
      this.startWaiting();
    }, rand);
  }

  startEvent(e) {
    e.preventDefault();
    this.resetGame();
    this.setState({ playing: true }, () => {
      this.randTimer();
    })
  }

  startWaiting() {
    let now = new Date();
    this.setState({ waiting: true, startTime: now })
  }

  stopEvent(e) {
    e.preventDefault();
    let now = new Date();
    this.setState({ playing: false, waiting: false, finished: true, stopTime: now }, () => {
      this.getTime();
    })
  }

  getTime() {
    let total = (this.state.stopTime.getTime() - this.state.startTime.getTime());
    if (this.state.bestTime > total) {
      this.setState({ bestTime: total })
      // TODO store top time to DB
    }
    return total;
  }

  resetGame() {
    this.setState({
      finished: false,
      playing: false,
      waiting: false,
      startTime: null,
      stopTime: null
    })
  }

  storeBest(e) {
    e.preventDefault();
    //TODO implement saving a score
  }

  render() {
    const { name } = this.state;
    return (
      <div id="home-view">
        {!this.state.playing && !this.state.waiting && !this.state.finished &&
          <main id="home-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
            <h1 className="hero-title">Reaction Time Test</h1>
            <h3>When the red box turns green, click as quickly as you can!</h3>
            <button id="home-start-btn" onClick={(e) => {this.startEvent(e)}}>Get Started</button>
          </main>
        }
        {this.state.playing && !this.state.waiting &&
          <main id="home-hero-red">
            <img src="../assets/logo_pause.svg" width="100" alt="three dots in a row" />
            <br/>
            <h1 className="hero-title">Wait For Green</h1>
          </main>
        }
        {this.state.waiting &&
          <main id="home-hero-green">
            <a onClick={(e) => {this.stopEvent(e)}}>
              <img src="../assets/logo_pause.svg" width="100" alt="three dots in a row" />
              <h1 className="hero-title">Click!!!</h1>
            </a>
          </main>
        }
        {this.state.finished &&
          <main id="home-hero">
            <img src="../assets/logo_clock.svg" width="100" alt="three dots in a row" />
            <h1 className="hero-title">
              {
                this.getTime() + ' ms'
              }
            </h1>
            <div>
              <button id="reaction-save-btn" onClick={(e) => {this.storeBest(e)}}>Save Score</button>
              <button id="reaction-start-btn" onClick={(e) => {this.startEvent(e)}}>Try Again</button>
            </div>
          </main>
        }
        <section className="reaction-desc description">
          <h2>Aim Trainer</h2>
          <p>
            Click the targets as quickly and accurately as you can.<br/>
            This tests reflexes and hand-eye coordination.<br/>
            Once you've clicked 30 targets, your score and average time per target will be displayed.<br/>
            This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.
          </p>
        </section>
      </div>
    );
  }
}

export default Reaction;
