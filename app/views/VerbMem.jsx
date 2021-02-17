import React from "react";

import wordBank from '../services/wordBank.js'
import styles from '../styles/views/VerbMem.css';


class VerbMem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      finished: false,
      lives: 3,
      currentScore: 0,
      bestScore: 0,
      wordBank: [],
      aword: '',
      seenWords: {},
    };
  }

  componentDidMount() {
    this.setState({
      wordBank: wordBank.words,
      aword: this.getRandWord()
    })

  }

  getRandWord() {
    let len = this.state.wordBank.length;
    let rand = Math.floor(Math.random() * len);
    return this.state.wordBank[rand];
  }

  checkWordBank(word) {
    if (this.state.seenWords[word]) console.log('hi')
  }

  startEvent(e) {
    e.preventDefault();
    this.setState({ playing: true })
  }


  render() {
    return (
      <div id="verb-view">
        {!this.state.playing &&
          <main id="verb-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" height="100" alt="dictionary book icon" />
            <h1 className="hero-title">Verbal Memory Test</h1>
            <h4>You will be shown words, one at a time.</h4>
            <h4>If you've seen it before, click SEEN. If it's a new word, click NEW.</h4>
            <button id="home-start-btn" onClick={(e) => {this.startEvent(e)}}>Get Started</button>
          </main>
        }
        {this.state.playing &&
          <main id="verb-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" height="100" alt="dictionary book icon" />
            <h1 className="hero-title">Verbal Memory Test</h1>
            <h4>You will be shown words, one at a time.</h4>
            <h4>If you've seen it before, click SEEN. If it's a new word, click NEW</h4>
            <button id="home-start-btn" onClick={(e) => {this.startEvent(e)}}>SEEN</button>
            <button id="home-start-btn" onClick={(e) => {this.startEvent(e)}}>NEW</button>
          </main>
        }
        <section className="dict-desc description">
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

export default VerbMem;
