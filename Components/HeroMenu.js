import React from "react";
import IconsBar from "./IconsBar";
import heroes from "../heroes";
import Hero from "./Hero";

class HeroMenu extends React.Component {
  state = {
    heroes: { heroes }
  };

  fillInStats = details => {
    this.props.fillInStats(details);
    this.checkDeselect();
  };

  checkDeselect = () => {
    for (var ref in this.refs) {
      this.refs[ref].deselect();
    }
  };

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Heroes</p>
        <div className="panel-block">
          <input className="input is-small" type="text" placeholder="search" />
        </div>
        {/* Load Weapon Icon Bar */}
        <IconsBar />
        {/* Load Heroes onto Menu */}
        <div className="hero-container">
          {Object.keys(heroes).map(key => (
            <Hero
              ref={key}
              key={key}
              index={key}
              details={heroes[key]}
              fillInStats={this.fillInStats}
            />
          ))}
        </div>
      </nav>
    );
  }
}

export default HeroMenu;
