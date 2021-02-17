import React from "react";

import Hero from '../components/hero.js';

class AimTrainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: null,
      top: null,
      topScore: 0,
      missed: 0,
      timer: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    // TODO need to handle canceling the timer on view switch
  }

  randGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  tickDownTimer(iteration) {
    setTimeout(() => {
      this.setState({
        timer: iteration,
      });
      console.log(this.state.timer);
    }, 1000 * iteration);
  }

  startTimer() {
    let start = Date.now();
    for (let i = 1; i <= 30; i++) {
      this.tickDownTimer(i);
    }
  }

  setTarget() {
    let leftP = randGenerator(0, 90);
    let rightP = randGenerator(0, 90);
    this.setState({
      left: leftP,
      right: rightP,
    });
  }

  render() {
    return (
      <div className="container">
        <Hero />
        <h1>Hey yo</h1>
      </div>
    );
  }
}

export default AimTrainer;
