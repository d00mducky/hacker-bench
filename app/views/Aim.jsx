import React from "react";

import styles from '../styles/views/Aim.css';

class AimTrainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: null,
      top: null,
      playing: false,
      finished: false,
      newRecord: false,
      bestTime: 100000000,
      currentTime: 0,
      targetsLeft: 10,
      startTime: null,
      stopTime: null
    };
  }

  componentDidMount() {
  }

  randGenerator(min, max) {
    return (Math.floor(Math.random() * (max - min) + min))
  }

  setTargetPos() {
    let leftP = this.randGenerator(10, 80);
    let topP = this.randGenerator(10, 80);
    this.setState({ left: leftP, top: topP })
  }

  startEvent(e) {
    e.preventDefault();
    // reset game environment
    this.setState({
      left: null,
      top: null,
      playing: false,
      finished: false,
      newRecord: false,
      currentTime: 0,
      targetsLeft: 10,
      startTime: null,
      stopTime: null
    }, () => { // after game reset -
      let now = new Date();
      let leftP = this.randGenerator(10, 80);
      let topP = this.randGenerator(10, 80);
      this.setState({
        playing: true,
        left: leftP,
        top: topP,
        startTime: now
      })
    })
  }

  hitTarget(e) {
    e.preventDefault();
    let val = this.state.targetsLeft - 1;
    if (val === 0) {
      this.stopEvent();
    } else {
      this.setState({ targetsLeft: val }, () => {
        this.setTargetPos();
      })
    }
  }

  stopEvent() {
    let now = new Date();
    this.setState({
      top: null,
      left: null,
      playing: false,
      finished: true,
      stopTime: now
    }, () => {
      this.getTime();
    })
  }

  getTime() {
    let total = (this.state.stopTime.getTime() - this.state.startTime.getTime());
    let avg = Math.floor(total / 10);
    console.log(avg);
    this.setState({
      currentTime: avg
    }, () => {
      if (this.state.bestTime > avg) {
        this.setState({ bestTime: avg, newRecord: true })
        // TODO store top time to DB
      }
    })
  }

  storeBest(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="aim-view">
        {!this.state.playing && !this.state.finished &&
          <main id="aim-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
            <h1 className="hero-title">Aim Trainer</h1>
            <img onClick={(e) => {this.startEvent(e)}} id="target-icon" src="../assets/target.svg" width="100" alt="a target" />
            <h3>Hit 30 targets as quickly as you can.</h3>
            <br></br>
            <h3>Click the target to begin!</h3>
          </main>
        }
        {this.state.playing && !this.state.finished && this.state.targetsLeft > 0 &&
          <main id="aim-hero">
            <div id="target-counter">
              <h4>Remaining</h4>
              {this.state.targetsLeft}
            </div>
            <img
              id="target-icon"
              src="../assets/target.svg"
              width="100"
              alt="a target"
              onClick={(e) => {this.hitTarget(e)}}
              style={{
                'position': 'absolute',
                'top': `${this.state.top}%`,
                'left': `${this.state.left}%`
              }}
            />
          </main>
        }
        {this.state.finished &&
          <main id="aim-hero">
            <img src="../assets/target.svg" width="100" alt="three dots in a row" />
            <h3 id="aim-avg">Average time per target</h3>
            <h1 className="hero-title">
              {
                this.state.currentTime + ' ms'
              }
            </h1>
            <div id="event-end-info">
              {this.state.newRecord &&
                <button id="reaction-save-btn" onClick={(e) => {this.storeBest(e)}}>Save Score</button>
              }
              <button id="reaction-start-btn" onClick={(e) => {this.startEvent(e)}}>Try Again</button>
            </div>
          </main>
        }
        <section className="aim-desc description">
          <h2>About The Test</h2>
          <p>
            This is a simple tool to measure your reaction time.
            The average (median) reaction time is roughly 480 milliseconds, according to the data collected so far.
          </p><br></br>
          <p>
            Click the targets as quickly and accurately as you can.
            This tests reflexes and hand-eye coordination.
            Once you've clicked 30 targets, your score and average time per target will be displayed.
          </p><br></br>
          <p>
            In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.
            Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.
          </p><br></br>
          <p>
            This is discused in further detail on the the statistics page. While an average human reaction time may fall between 400-550ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!
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

export default AimTrainer;
