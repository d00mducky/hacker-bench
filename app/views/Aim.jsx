import React from "react";

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
        <h2>Aim Trainer</h2>
          <p>
            Click the targets as quickly and accurately as you can.<br/><br/>
            This tests reflexes and hand-eye coordination.<br/><br/>
            Once you've clicked 30 targets, your score and average time per target will be displayed.<br/><br/>
            This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.
          </p>
      </div>
    );
  }
}

export default AimTrainer;
