import React from "react";
import API from '../services/api.js';
import wordBank from '../services/wordBank.js'
import styles from '../styles/views/VerbMem.css';


class VerbMem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      finished: false,
      newRecord: false,
      lives: 3,
      currentScore: 0,
      bestScore: 0,
      wordBank: [],
      currentWord: '',
      seenWords: [],
    };
  }

  componentDidMount() {
    //TODO pull in best score from DB
    API.getOne([1], (results) => {
      let top = results[0].verbalScore;
      this.setState({
        wordBank: wordBank.words,
        bestScore: top
      })
    })
  }

  loseLife() {
    let val = this.state.lives - 1;
    if (val === 0) {
      // stop the game, done playing
      this.stopEvent();
    } else {
      this.setState({ lives: val })
    }
  }

  getRandWord(isNew) {
    let len = this.state.wordBank.length;
    if (isNew) {
      let rand = Math.floor(Math.random() * len);
      let word = this.state.wordBank[rand];
      this.setState({ currentWord: word })
    } else {
      if (Math.random() > .7) {
        let rand = Math.floor(Math.random() * this.state.seenWords.length)
        let word = this.state.seenWords[rand];
        this.setState({ currentWord: word })
      } else {
        let rand = Math.floor(Math.random() * len);
        let word = this.state.wordBank[rand];
        this.setState({ currentWord: word })
      }
    }
  }

  startEvent(e) {
    e.preventDefault();
    this.getRandWord(true);
    this.setState({
      playing: true,
      finished: false,
      newRecord: false,
      seenWords: [],
      lives: 3,
      currentScore: 0
    })
  }

  stopEvent() {
    this.setState({ playing: false, finished: true }, () => {
      if (this.state.currentScore > this.state.bestScore) {
        let val = this.state.currentScore;
        this.setState({ bestScore: val, newRecord: true })
        //TODO push best score to DB
      }
    })
  }

  checkSeen(e) {
    if (this.state.seenWords.includes(this.state.currentWord)) {
      let val = this.state.currentScore + 1;
      this.setState({ currentScore: val }, () => {
        this.getRandWord(false)
      })
    } else {
      this.loseLife();
      this.getRandWord(true);
    }
  }

  checkNew(e) {
    if (!this.state.seenWords.includes(this.state.currentWord)) {
      let val = this.state.currentScore + 1;
      let allSeen = [...this.state.seenWords, this.state.currentWord];
      this.setState({ seenWords: allSeen, currentScore: val}, () => {
        this.getRandWord(false);
      })
    } else {
      this.loseLife();
      this.getRandWord(false);
    }
  }

  storeBest(e) {
    e.preventDefault();
    API.updateVerbalScore([this.state.currentScore], (results) => {
      console.log(results);
    })
  }

  render() {
    return (
      <div id="verb-view">
        {!this.state.playing && !this.state.finished &&
          <main id="verb-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" height="100" alt="dictionary book icon" />
            <h1 className="hero-title">Verbal Memory Test</h1>
            <h4>You will be shown words, one at a time.</h4>
            <h4>If you've seen it before, click SEEN. If it's a new word, click NEW.</h4>
            <button id="home-start-btn" onClick={(e) => {this.startEvent(e)}}>Get Started</button>
          </main>
        }
        {this.state.playing && !this.state.finished &&
          <main id="verb-hero">
            <div id="verb-game-info">
              <h3 id="verb-game-lives">
                {"Lives | " + this.state.lives}
              </h3>
              <h3 id="verb-game-score">
                {"Score | " + this.state.currentScore}
              </h3>
            </div>
            <h1 className="hero-title">{this.state.currentWord}</h1>
            <div id="verb-play-btns">
              <button id="home-start-btn" onClick={(e) => {this.checkSeen(e)}}>SEEN</button>
              <button id="home-start-btn" onClick={(e) => {this.checkNew(e)}}>NEW</button>
            </div>
          </main>
        }
        {this.state.finished && !this.state.playing &&
          <main id="verb-hero">
            <img id="hero-icon" src="../assets/logo_lg.svg" width="100" height="100" alt="lightning bolt icon" />
            <h3>Verbal Memory</h3>
            <h1 className="hero-title">{this.state.currentScore + " words"}</h1>
            <div id="event-end-info">
              {this.state.newRecord &&
                <button id="reaction-save-btn" onClick={(e) => {this.storeBest(e)}}>Save Score</button>
              }
              <button id="reaction-start-btn" onClick={(e) => {this.startEvent(e)}}>Try Again</button>
            </div>
          </main>
        }
        <section className="verb-desc description">
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
