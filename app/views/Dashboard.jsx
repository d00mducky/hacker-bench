import React, { Component } from "react";
import API from "../services/api";
import styles from "../styles/views/Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // Do something when loaded
    API.getOne([1], (results) => {
      this.setState({ user: results[0] })
    });
  }

  render() {
    return (
      <div id="dashboard-view">
        <section id="dashboard-user">
          <h4>Username</h4>
          {this.state.user.name}
        </section>
        <main id="dashboard-hero">
          <img id="hero-icon" src="../assets/logo_lg.svg" width="100" alt="lightning bolt icon" />
          <h1 className="hero-title">Hacker Benchmark</h1>
          <h3>Measure your abilities with brain games and cognitive tests.</h3>
        </main>
      </div>
    );
  }
}

export default Dashboard;
