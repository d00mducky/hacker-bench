import React from 'react';
import { Link } from "react-router-dom";

import styles from '../styles/components/GameList.css';

const GameList = () => {
  return (
    <section id="game-list">
      <article className="game-container">
        <Link to="/reaction" id="reaction-card" className="card">
          <img id="reaction-logo" src="../assets/logo_alt.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Reaction Time
          </h3>
          <p>Test your visual reflexes.</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/aim" id="aim-card" className="card">
          <img id="aim-logo" src="../assets/logo_aim.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Aim Trainer
          </h3>
          <p>How quickly can you hit all the targets?</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/nums" id="nums-card" className="card">
          <img id="nums-logo" src="../assets/logo_num.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Number Memory
          </h3>
          <p>Remember the longest number you can.</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/seq" id="seq-card" className="card">
          <img id="nums-logo" src="../assets/logo_seq.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Sequence Memory
          </h3>
          <p>Remember an increasingly long pattern.</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/verbmem" id="dict-card" className="card">
          <img id="nums-logo" src="../assets/logo_dict.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Verbal Memory
          </h3>
          <p>Keep as many words in memory as possible.</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/nums" id="chimp-card" className="card">
          <img id="nums-logo" src="../assets/logo_seq.svg" alt="lightning bolt icon" width="60" height="60"/>
          <h3>
          Chimp Test
          </h3>
          <p>Are you smarter than a chimpanzee?</p>
        </Link>
      </article>
    </section>
  );
}

export default GameList;