import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/navbar.css";

const Navbar = () => (
  <header>
    <div className="header-container">
      <nav className="site-nav">
        <Link to="/" id="site-logo">
          <img src="assets/logo_sm.svg" width="10" alt="lightning bolt icon" />
          HACKER BENCHMARK
        </Link>
        <Link to="/dashboard" id="site-dashboard">
          DASHBOARD
        </Link>
      </nav>
      <nav className="account-nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="aim">AimTrainer</Link>
        <Link to="/root">Root</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
