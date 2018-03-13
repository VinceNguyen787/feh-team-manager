import React, { Component } from "react";
import HeroMenu from "./HeroMenu";
import HeroMenuStats from "./HeroMenuStats";

class App extends Component {
  state = {
    details: {}
  };

  fillInStats = details => {
    this.setState({
      details: details
    });
    this.refs.heroMenuStats.setStats(details);
    this.refs.heroMenuStats.setNameEpithet(details.name, details.epithet);
  };

  render() {
    return (
      <div>
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="image is 16x9">
              <img
                src="https://vignette.wikia.nocookie.net/fireemblem/images/b/b1/FEH_logo.png/revision/latest?cb=20170304042509"
                alt="TODO"
              />
            </a>
          </div>
        </nav>
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-two-fifths">
              <HeroMenu ref="heroMenu" fillInStats={this.fillInStats} />
            </div>
            <div className="column">
              <HeroMenuStats ref="heroMenuStats" details={this.state.details} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
