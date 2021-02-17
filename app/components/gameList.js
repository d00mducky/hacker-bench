import React from 'react';
import { Link } from "react-router-dom";

import styles from '../styles/components/gameList.css';

const GameList = () => {
  return (
    <section id="game-list">
      <article className="game-container">
        <Link to="/reaction" id="reaction-card" className="card">
          <img id="reaction-logo" src="../assets/logo_alt.svg" alt="lightning bolt icon" />
          <h3>
          Reaction Time
          </h3>
          <p>Test your visual reflexes.</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/aim" id="aim-card" className="card">
          <img id="aim-logo" src="../assets/logo_aim.svg" alt="lightning bolt icon" />
          <h3>
          Aim Trainer
          </h3>
          <p>How quickly can you hit all the targets?</p>
        </Link>
      </article>
      <article className="game-container">
        <Link to="/nums" id="nums-card" className="card">
          <img id="nums-logo" src="../assets/logo_num.svg" alt="lightning bolt icon" />
          <h3>
          Sequence Memory
          </h3>
          <p>Remember the longest number you can.</p>
        </Link>
      </article>
    </section>
  );
}

export default GameList;