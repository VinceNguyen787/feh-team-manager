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
    redStone: false,
    blueStone: false,
    greenStone: false,

    allMovement: true,
    infantry: false,
    cavalry: false,
    flier: false,
    armored: false,

    numWeaponSelected: 0,
    numMovementSelected: 0,

    weaponArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
      redStone: false,
      blueStone: false,
      greenStone: false,

      numWeaponSelected: 0,

      weaponArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    });

    let newArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    this.props.filterHeroes(newArray, this.state.movementArray);
  };

  handleSwordClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.redSword) {
      if (this.state.allWeapon) {
        newArray = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[0] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        redSword: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[0] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          redSword: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleLanceClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.blueLance) {
      if (this.state.allWeapon) {
        newArray = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[1] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        blueLance: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[1] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          blueLance: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleAxeClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.greenAxe) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[2] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        greenAxe: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[2] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          greenAxe: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleRedTomeClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.redTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[3] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        redTome: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[3] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          redTome: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleBlueTomeClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.blueTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[4] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        blueTome: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[4] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          blueTome: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleGreenTomeClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.greenTome) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[5] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        greenTome: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[5] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          greenTome: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleBowClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.bow) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[6] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        bow: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[6] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          bow: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleDaggerClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.dagger) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[7] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        dagger: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[7] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          dagger: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleStaffClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.staff) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[8] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        staff: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[8] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          staff: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleRedStoneClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.redStone) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[9] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        redStone: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[9] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          redStone: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleBlueStoneClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.blueStone) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
      } else {
        newArray = this.state.weaponArray;
        newArray[10] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        blueStone: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[10] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          blueStone: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  handleGreenStoneClick = () => {
    let newArray = [];
    let numWeaponSelected = this.state.numWeaponSelected;

    if (!this.state.greenStone) {
      if (this.state.allWeapon) {
        newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
      } else {
        newArray = this.state.weaponArray;
        newArray[11] = 1;
      }

      numWeaponSelected++;

      this.setState({
        allWeapon: false,
        greenStone: true,

        numWeaponSelected: numWeaponSelected,

        weaponArray: newArray
      });

      this.props.filterHeroes(newArray, this.state.movementArray);
    } else {
      newArray = this.state.weaponArray;
      newArray[11] = 0;

      numWeaponSelected--;

      if (numWeaponSelected === 0) {
        this.handleAllWeaponClick();
      } else {
        this.setState({
          greenStone: false,

          numWeaponSelected: numWeaponSelected,

          weaponArray: newArray
        });

        this.props.filterHeroes(newArray, this.state.movementArray);
      }
    }
  };

  // Event Handlers for Movement Types
  handleAllMovementClick = () => {
    this.setState({
      allMovement: true,
      infantry: false,
      cavalry: false,
      flier: false,
      armored: false,

      numMovementSelected: 0,

      movementArray: [1, 1, 1, 1]
    });

    let newArray = [1, 1, 1, 1];

    this.props.filterHeroes(this.state.weaponArray, newArray);
  };

  handleInfantryClick = () => {
    let newArray = [];
    let numMovementSelected = this.state.numMovementSelected;

    if (!this.state.infantry) {
      if (this.state.allMovement) {
        newArray = [1, 0, 0, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[0] = 1;
      }

      numMovementSelected++;

      this.setState({
        allMovement: false,
        infantry: true,

        numMovementSelected: numMovementSelected,

        movementArray: newArray
      });

      this.props.filterHeroes(this.state.weaponArray, newArray);
    } else {
      newArray = this.state.movementArray;
      newArray[0] = 0;

      numMovementSelected--;

      if (numMovementSelected === 0) {
        this.handleAllMovementClick();
      } else {
        this.setState({
          infantry: false,

          numMovementSelected: numMovementSelected,

          movementArray: newArray
        });

        this.props.filterHeroes(this.state.weaponArray, newArray);
      }
    }
  };

  handleCavalryClick = () => {
    let newArray = [];
    let numMovementSelected = this.state.numMovementSelected;

    if (!this.state.cavalry) {
      if (this.state.allMovement) {
        newArray = [0, 1, 0, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[1] = 1;
      }

      numMovementSelected++;

      this.setState({
        allMovement: false,
        cavalry: true,

        numMovementSelected: numMovementSelected,

        movementArray: newArray
      });

      this.props.filterHeroes(this.state.weaponArray, newArray);
    } else {
      newArray = this.state.movementArray;
      newArray[1] = 0;

      numMovementSelected--;

      if (numMovementSelected === 0) {
        this.handleAllMovementClick();
      } else {
        this.setState({
          cavalry: false,

          numMovementSelected: numMovementSelected,

          movementArray: newArray
        });

        this.props.filterHeroes(this.state.weaponArray, newArray);
      }
    }
  };

  handleFlierClick = () => {
    let newArray = [];
    let numMovementSelected = this.state.numMovementSelected;

    if (!this.state.flier) {
      if (this.state.allMovement) {
        newArray = [0, 0, 1, 0];
      } else {
        newArray = this.state.movementArray;
        newArray[2] = 1;
      }

      numMovementSelected++;

      this.setState({
        allMovement: false,
        flier: true,

        numMovementSelected: numMovementSelected,

        movementArray: newArray
      });

      this.props.filterHeroes(this.state.weaponArray, newArray);
    } else {
      newArray = this.state.movementArray;
      newArray[2] = 0;

      numMovementSelected--;

      if (numMovementSelected === 0) {
        this.handleAllMovementClick();
      } else {
        this.setState({
          flier: false,

          numMovementSelected: numMovementSelected,

          movementArray: newArray
        });

        this.props.filterHeroes(this.state.weaponArray, newArray);
      }
    }
  };

  handleArmoredClick = () => {
    let newArray = [];
    let numMovementSelected = this.state.numMovementSelected;

    if (!this.state.armored) {
      if (this.state.allMovement) {
        newArray = [0, 0, 0, 1];
      } else {
        newArray = this.state.movementArray;
        newArray[3] = 1;
      }

      numMovementSelected++;

      this.setState({
        allMovement: false,
        armored: true,

        numMovementSelected: numMovementSelected,

        movementArray: newArray
      });

      this.props.filterHeroes(this.state.weaponArray, newArray);
    } else {
      newArray = this.state.movementArray;
      newArray[3] = 0;

      numMovementSelected--;

      if (numMovementSelected === 0) {
        this.handleAllMovementClick();
      } else {
        this.setState({
          armored: false,

          numMovementSelected: numMovementSelected,

          movementArray: newArray
        });

        this.props.filterHeroes(this.state.weaponArray, newArray);
      }
    }
  };

  render() {
    return (
      <div>
        {/* Weapon Icon Bar Row 1*/}
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
            </ul>
          </div>
        </div>
        {/* Weapon Icon Bar Row 2 */}
        <div className="panel-tabs">
          <div className="tabs is-boxed">
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
                <img src={weaponIcons.staff.image} alt="Red Sword" width="25" />
              </a>
            </li>
            <li
              className={this.state.redStone ? "is-active" : null}
              onClick={this.handleRedStoneClick}
            >
              <a>
                <img
                  src={weaponIcons.redStone.image}
                  alt="Red Dragonstone"
                  width="23"
                />
              </a>
            </li>
            <li
              className={this.state.blueStone ? "is-active" : null}
              onClick={this.handleBlueStoneClick}
            >
              <a>
                <img
                  src={weaponIcons.blueStone.image}
                  alt="Blue Dragonstone"
                  width="23"
                />
              </a>
            </li>
            <li
              className={this.state.greenStone ? "is-active" : null}
              onClick={this.handleGreenStoneClick}
            >
              <a>
                <img
                  src={weaponIcons.greenStone.image}
                  alt="Green Dragonstone"
                  width="23"
                />
              </a>
            </li>
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
