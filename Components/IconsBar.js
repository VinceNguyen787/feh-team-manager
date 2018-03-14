import React from "react";
import weaponIcons from "../weapon-icons";
import movementIcons from "../movement-icons";

// Weapon Icons Bar on Hero Browser
class IconsBar extends React.Component {
  state = {
    allWeapon: true,
    redSword: false,
    blueLance: false,
    greenAxe: false,
    redTome: false,
    blueTome: false,
    greenTome: false,
    bow: false,
    dagger: false,
    staff: false,
    stone: false,

    allMovement: true,
    infantry: false,
    cavalry: false,
    flier: false,
    armored: false
  };

  // Event Handlers for Weapon Types
  handleAllWeaponClick = () => {
    this.setState({
      allWeapon: true,

      redSword: false,
      blueLance: false,
      greenAxe: false,
      redTome: false,
      blueTome: false,
      greenTome: false,
      bow: false,
      dagger: false,
      staff: false,
      stone: false
    });
  };

  handleSwordClick = () => {
    this.setState({
      allWeapon: false,
      redSword: true
    });
  };

  handleLanceClick = () => {
    this.setState({
      allWeapon: false,
      blueLance: true
    });
  };

  handleAxeClick = () => {
    this.setState({
      allWeapon: false,
      greenAxe: true
    });
  };

  handleRedTomeClick = () => {
    this.setState({
      allWeapon: false,
      redTome: true
    });
  };

  handleBlueTomeClick = () => {
    this.setState({
      allWeapon: false,
      blueTome: true
    });
  };

  handleGreenTomeClick = () => {
    this.setState({
      allWeapon: false,
      greenTome: true
    });
  };

  handleBowClick = () => {
    this.setState({
      allWeapon: false,
      bow: true
    });
  };

  handleDaggerClick = () => {
    this.setState({
      allWeapon: false,
      dagger: true
    });
  };

  handleStaffClick = () => {
    this.setState({
      allWeapon: false,
      staff: true
    });
  };

  handleStoneClick = () => {
    this.setState({
      allWeapon: false,
      stone: true
    });
  };

  // Event Handlers for Movement Types
  handleAllMovementClick = () => {
    this.setState({
      allMovement: true,
      infantry: false,
      cavalry: false,
      flier: false,
      armored: false
    });
  };

  handleInfantryClick = () => {
    this.setState({
      allMovement: false,
      infantry: true
    });
  };

  handleCavalryClick = () => {
    this.setState({
      allMovement: false,
      cavalry: true
    });
  };

  handleFlierClick = () => {
    this.setState({
      allMovement: false,
      flier: true
    });
  };

  handleArmoredClick = () => {
    this.setState({
      allMovement: false,
      armored: true
    });
  };

  render() {
    return (
      <div>
        {/* Weapon Icon Bar */}
        <div className="panel-tabs">
          <div className="tabs is-boxed">
            <ul>
              <li
                className={this.state.allWeapon ? "is-active" : null}
                onClick={this.handleAllWeaponClick}
              >
                <a>
                  <img src={weaponIcons.all.image} alt="All" width="23" />
                </a>
              </li>
              <li
                className={this.state.redSword ? "is-active" : null}
                onClick={this.handleSwordClick}
              >
                <a>
                  <img
                    src={weaponIcons.redSword.image}
                    alt="Red Sword"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.blueLance ? "is-active" : null}
                onClick={this.handleLanceClick}
              >
                <a>
                  <img
                    src={weaponIcons.blueLance.image}
                    alt="Blue Lance"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.greenAxe ? "is-active" : null}
                onClick={this.handleAxeClick}
              >
                <a>
                  <img
                    src={weaponIcons.greenAxe.image}
                    alt="Green Axe"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.redTome ? "is-active" : null}
                onClick={this.handleRedTomeClick}
              >
                <a>
                  <img
                    src={weaponIcons.redTome.image}
                    alt="Red Tome"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.blueTome ? "is-active" : null}
                onClick={this.handleBlueTomeClick}
              >
                <a>
                  <img
                    src={weaponIcons.blueTome.image}
                    alt="Blue Tome"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.greenTome ? "is-active" : null}
                onClick={this.handleGreenTomeClick}
              >
                <a>
                  <img
                    src={weaponIcons.greenTome.image}
                    alt="Green Tome"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.bow ? "is-active" : null}
                onClick={this.handleBowClick}
              >
                <a>
                  <img src={weaponIcons.bow.image} alt="Bow" width="23" />
                </a>
              </li>
              <li
                className={this.state.dagger ? "is-active" : null}
                onClick={this.handleDaggerClick}
              >
                <a>
                  <img src={weaponIcons.dagger.image} alt="Dagger" width="23" />
                </a>
              </li>
              <li
                className={this.state.staff ? "is-active" : null}
                onClick={this.handleStaffClick}
              >
                <a>
                  <img
                    src={weaponIcons.staff.image}
                    alt="Red Sword"
                    width="25"
                  />
                </a>
              </li>
              <li
                className={this.state.stone ? "is-active" : null}
                onClick={this.handleStoneClick}
              >
                <a>
                  <img
                    src={weaponIcons.redStone.image}
                    alt="Red Dragonstone"
                    width="23"
                  />
                  <img
                    src={weaponIcons.blueStone.image}
                    alt="Blue Dragonstone"
                    width="23"
                  />
                  <img
                    src={weaponIcons.greenStone.image}
                    alt="Green Dragonstone"
                    width="23"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Movement Icons Bar */}
        <div className="panel-tabs">
          <div className="tabs is-boxed">
            <ul>
              <li
                className={this.state.allMovement ? "is-active" : null}
                onClick={this.handleAllMovementClick}
              >
                <a>
                  <img src={weaponIcons.all.image} alt="All" width="23" />
                </a>
              </li>
              <li
                className={this.state.infantry ? "is-active" : null}
                onClick={this.handleInfantryClick}
              >
                <a>
                  <img
                    src={movementIcons.infantry.image}
                    alt="Infantry"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.cavalry ? "is-active" : null}
                onClick={this.handleCavalryClick}
              >
                <a>
                  <img
                    src={movementIcons.cavalry.image}
                    alt="Cavalry"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.flier ? "is-active" : null}
                onClick={this.handleFlierClick}
              >
                <a>
                  <img
                    src={movementIcons.flying.image}
                    alt="Flying"
                    width="23"
                  />
                </a>
              </li>
              <li
                className={this.state.armored ? "is-active" : null}
                onClick={this.handleArmoredClick}
              >
                <a>
                  <img
                    src={movementIcons.armored.image}
                    alt="Armored"
                    width="23"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IconsBar;
