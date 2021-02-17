import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/NavBar.css";

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
        <Link to="/signup" id="site-signup">
          SIGN UP
        </Link>
        <Link to="/login" id="site-login">
          LOGIN
        </Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
