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
      bestScore: 0,
      currentScore: 0,
      targetsLeft: 30,
      missed: 0,
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
    let leftP = randGenerator(0, 90);
    let rightP = randGenerator(0, 90);
    this.setState({ left: leftP, right: rightP })
  }

  startEvent(e) {
    e.preventDefault();
    let now = new Date();
    let leftP = randGenerator(0, 90);
    let rightP = randGenerator(0, 90);
    this.setState({
      playing: true,
      left: leftP,
      right: rightP,
      startTime: now
    })
  }

  hitTarget(e) {
    e.preventDefault();
    let val = this.state.targetsLeft - 1;
    this.setState({ targetsLeft: val }, () => {

    })
  }

  stopEvent(e) {
    e.preventDefault();
    let now = new Date();
  }


  render() {
    return (
      <div id="aim-view">
        {!this.state.playing && !this.state.finished &&
          <main id="home-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
            <h1 className="hero-title">Aim Trainer</h1>
            <img onClick={(e) => {this.startEvent(e)}} id="target-icon" src="../assets/target.svg" width="100" alt="a target" />
            <h3>Hit 30 targets as quickly as you can.</h3>
            <br></br>
            <h3>Click the target to begin!</h3>
          </main>
        }
        {this.state.playing && !this.state.finished && this.state.targetsLeft > 0 &&
          <main id="home-hero">
            <img
              id="target-icon"
              src="../assets/target.svg"
              width="100"
              alt="a target"
              onClick={(e) => {this.hitTarget(e)}}
              style={{
                'position': 'relative',
                'top': `${this.state.top}%`,
                'left': `${this.state.left}%`
              }}
            />
          </main>
        }
        {this.state.finished &&
          <main id="home-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
            <h1 className="hero-title">Aim Trainer</h1>
            <img id="target-icon" src="../assets/target.svg" width="100" alt="a target" />
            <h3>Hit 30 targets as quickly as you can!</h3>
          </main>
        }
        <section>
          <p>
            Click the targets as quickly and accurately as you can.
            This tests reflexes and hand-eye coordination.
            Once you've clicked 30 targets, your score and average time per target will be displayed.
            This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.
          </p>
        </section>
      </div>
    );
  }
}

export default AimTrainer;
