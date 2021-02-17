import React, { Component } from "react";
import Api from "../services/api";

import styles from "../styles/views/Reaction.css";

class Reaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      waiting: false,
      finished: false,
      startTime: null,
      stopTime: null,
      currentTime: null,
      newRecord: false,
      bestTime: 1000000000
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // Do something when loaded
    //TODO grab best time from DB
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
    let rand = (Math.random() * (6 - 2) + 2) * 1000;
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
    this.setState({
      currentTime: total
    })
    if (this.state.bestTime > total) {
      this.setState({ bestTime: total, newRecord: true })
      // TODO store top time to DB
    }
  }

  resetGame() {
    this.setState({
      finished: false,
      playing: false,
      waiting: false,
      startTime: null,
      stopTime: null,
      newRecord: false
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
          <main id="home-hero-green" onClick={(e) => {this.stopEvent(e)}}>
            <h1 className="hero-title">Click!!!</h1>
          </main>
        }
        {this.state.finished &&
          <main id="home-hero">
            <img src="../assets/logo_clock.svg" width="100" alt="three dots in a row" />
            <h1 className="hero-title">
              {
                this.state.currentTime + ' ms'
              }
            </h1>
            <div>
              {this.state.newRecord &&
                <button id="reaction-save-btn" onClick={(e) => {this.storeBest(e)}}>Save Score</button>
              }
              <button id="reaction-start-btn" onClick={(e) => {this.startEvent(e)}}>Try Again</button>
            </div>
          </main>
        }
        <section className="reaction-desc description">
          <h2>About The Test</h2>
          <p>
            This is a simple tool to measure your reaction time.
            The average (median) reaction time is 215 milliseconds, according to the data collected so far.
          </p><br></br>
          <p>
            In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.
            Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.
          </p><br></br>
          <p>
            This is discused in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!
          </p><br></br>
          <p>
            If you want, you can keep track of your scores, and see your full history of reaction times.
            Just perform at least 5 clicks and then save.
          </p>
        </section>
      </div>
    );
  }
}

export default Reaction;
