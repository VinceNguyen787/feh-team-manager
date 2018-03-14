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
    armored: false,

    weaponArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    movementArray: [1, 1, 1, 1]
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
      stone: false,

      weaponArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    });

    let newArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleSwordClick = () => {
    let newArray = [];
    if (!this.state.redSword) {
      if (this.state.allWeapon) {
        newArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[0] = 1;
      }

      this.setState({
        allWeapon: false,
        redSword: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[0] = 0;

      this.setState({
        redSword: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleLanceClick = () => {
    let newArray = [];
    if (!this.state.blueLance) {
      if (this.state.allWeapon) {
        newArray = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[1] = 1;
      }

      this.setState({
        allWeapon: false,
        blueLance: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[1] = 0;

      this.setState({
        blueLance: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleAxeClick = () => {
    let newArray = [];
    if (!this.state.greenAxe) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[2] = 1;
      }

      this.setState({
        allWeapon: false,
        greenAxe: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[2] = 0;

      this.setState({
        greenAxe: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleRedTomeClick = () => {
    let newArray = [];
    if (!this.state.redTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[3] = 1;
      }

      this.setState({
        allWeapon: false,
        redTome: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[3] = 0;

      this.setState({
        redTome: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleBlueTomeClick = () => {
    let newArray = [];
    if (!this.state.blueTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[4] = 1;
      }

      this.setState({
        allWeapon: false,
        blueTome: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[4] = 0;

      this.setState({
        blueTome: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleGreenTomeClick = () => {
    let newArray = [];
    if (!this.state.greenTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[5] = 1;
      }

      this.setState({
        allWeapon: false,
        greenTome: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[5] = 0;

      this.setState({
        greenTome: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleBowClick = () => {
    let newArray = [];
    if (!this.state.bow) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[6] = 1;
      }

      this.setState({
        allWeapon: false,
        bow: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[6] = 0;

      this.setState({
        bow: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleDaggerClick = () => {
    let newArray = [];
    if (!this.state.dagger) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[7] = 1;
      }

      this.setState({
        allWeapon: false,
        dagger: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[7] = 0;

      this.setState({
        dagger: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleStaffClick = () => {
    let newArray = [];
    if (!this.state.staff) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[8] = 1;
      }

      this.setState({
        allWeapon: false,
        staff: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[8] = 0;

      this.setState({
        staff: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleStoneClick = () => {
    let newArray = [];
    if (!this.state.stone) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
      } else {
        newArray = this.state.weaponArray;
        newArray[9] = 1;
      }

      this.setState({
        allWeapon: false,
        stone: true,

        weaponArray: newArray
      });
    } else {
      newArray = this.state.weaponArray;
      newArray[9] = 0;

      this.setState({
        stone: false,

        weaponArray: newArray
      });
    }

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  // Event Handlers for Movement Types
  handleAllMovementClick = () => {
    this.setState({
      allMovement: true,
      infantry: false,
      cavalry: false,
      flier: false,
      armored: false,

      movementArray: [1, 1, 1, 1]
    });

    let newArray = [1, 1, 1, 1];

    this.props.filterHeroes(this.state.weaponArray, newArray);
  };

  handleInfantryClick = () => {
    let newArray = [];
    if (!this.state.infantry) {
      if (this.state.allMovement) {
        newArray = [1, 0, 0, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[0] = 1;
      }

      this.setState({
        allMovement: false,
        infantry: true,

        movementArray: newArray
      });
    } else {
      newArray = this.state.movementArray;
      newArray[0] = 0;

      this.setState({
        infantry: false,

        movementArray: newArray
      });
    }

    this.props.filterHeroes(this.state.weaponArray, newArray);
  };

  handleCavalryClick = () => {
    let newArray = [];
    if (!this.state.cavalry) {
      if (this.state.allMovement) {
        newArray = [0, 1, 0, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[1] = 1;
      }

      this.setState({
        allMovement: false,
        cavalry: true,

        movementArray: newArray
      });
    } else {
      newArray = this.state.movementArray;
      newArray[1] = 0;

      this.setState({
        cavalry: false,

        movementArray: newArray
      });
    }

    this.props.filterHeroes(this.state.weaponArray, newArray);
  };

  handleFlierClick = () => {
    let newArray = [];
    if (!this.state.flier) {
      if (this.state.allMovement) {
        newArray = [0, 0, 1, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[2] = 1;
      }

      this.setState({
        allMovement: false,
        flier: true,

        movementArray: newArray
      });
    } else {
      newArray = this.state.movementArray;
      newArray[2] = 0;

      this.setState({
        flier: false,

        movementArray: newArray
      });
    }

    this.props.filterHeroes(this.state.weaponArray, newArray);
  };

  handleArmoredClick = () => {
    let newArray = [];
    if (!this.state.armored) {
      if (this.state.allMovement) {
        newArray = [0, 0, 0, 1];
      } else {
        newArray = this.state.movementArray;
        newArray[3] = 1;
      }

      this.setState({
        allMovement: false,
        armored: true,

        movementArray: newArray
      });
    } else {
      newArray = this.state.movementArray;
      newArray[3] = 0;

      this.setState({
        armored: false,

        movementArray: newArray
      });
    }

    this.props.filterHeroes(this.state.weaponArray, newArray);
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
