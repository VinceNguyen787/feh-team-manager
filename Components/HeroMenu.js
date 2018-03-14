import React from "react";
import IconsBar from "./IconsBar";
import heroes from "../heroes";
import Hero from "./Hero";

class HeroMenu extends React.Component {
  state = {
    heroes: heroes
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

  filterHeroes = (weaponArray, movementArray) => {
    let allHeroes;
    let filteredHeroes = [];
    let weaponIndex = 0;
    let movementIndex = 0;

    // Populate heroes array with all heroes
    allHeroes = Object.keys(heroes).map(key => heroes[key]);

    for (let i = 0; i < allHeroes.length; i++) {
      let currHero = allHeroes[i];

      weaponIndex = currHero.weaponIndex;
      movementIndex = currHero.movementIndex;

      if (
        weaponArray[weaponIndex] === 1 &&
        movementArray[movementIndex] === 1
      ) {
        filteredHeroes.push(currHero);
      }
    }

    this.setState({ heroes: filteredHeroes });
  };

  render() {
    return (
      <nav className="panel">
        <p className="panel-heading">Heroes</p>
        <div className="panel-block">
          <input className="input is-small" type="text" placeholder="search" />
        </div>
        {/* Load Weapon Icon Bar */}
        <IconsBar filterHeroes={this.filterHeroes} />
        {/* Load Heroes onto Menu */}
        <div className="hero-container">
          {Object.keys(this.state.heroes).map(key => (
            <Hero
              ref={key}
              key={key}
              index={key}
              details={this.state.heroes[key]}
              fillInStats={this.fillInStats}
            />
          ))}
        </div>
      </nav>
    );
  }
}

export default HeroMenu;
