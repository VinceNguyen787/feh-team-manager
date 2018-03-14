import React from "react";
import feh from "../feh";
import misc from "../misc-icons";

class HeroMenuStats extends React.Component {
  state = {
    name: "",
    epithet: "",

    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0,

    equipped: false,
    maxLvl: true,

    hpBane: false,
    hpBoon: false,

    atkBane: false,
    atkBoon: false,

    spdBane: false,
    spdBoon: false,

    defBane: false,
    defBoon: false,

    resBane: false,
    resBoon: false,

    hpBonus: false,
    atkBonus: false,
    spdBonus: false,
    defBonus: false,
    resBonus: false
  };

  setNameEpithet = (name, epithet) => {
    this.setState({
      name: name,
      epithet: epithet
    });
  };

  /* Set Stats */
  setStats = details => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          details.hp[1] + (this.state.equipped ? (details.hpBonus ? 3 : 0) : 0),
        atk:
          details.atk[1] +
          (this.state.equipped
            ? details.atkBonus ? details.weapon + 3 : details.weapon
            : 0),
        spd:
          details.spd[1] +
          (this.state.equipped ? (details.spdBonus ? 3 : 0) : 0),
        def:
          details.def[1] +
          (this.state.equipped ? (details.defBonus ? 3 : 0) : 0),
        res:
          details.res[1] +
          (this.state.equipped ? (details.resBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        hp:
          details.hpMin[1] +
          (this.state.equipped ? (details.hpBonus ? 3 : 0) : 0),
        atk:
          details.atkMin[1] +
          (this.state.equipped
            ? details.atkBonus ? details.weapon + 3 : details.weapon
            : 0),
        spd:
          details.spdMin[1] +
          (this.state.equipped ? (details.spdBonus ? 3 : 0) : 0),
        def:
          details.defMin[1] +
          (this.state.equipped ? (details.defBonus ? 3 : 0) : 0),
        res:
          details.resMin[1] +
          (this.state.equipped ? (details.resBonus ? 3 : 0) : 0)
      });
    }
    this.setState({
      hpBane: false,
      hpBoon: false,
      atkBane: false,
      atkBoon: false,
      spdBane: false,
      spdBoon: false,
      defBane: false,
      defBoon: false,
      resBane: false,
      resBoon: false,

      hpBonus: details.hpBonus ? details.hpBonus : false,
      atkBonus: details.atkBonus ? details.atkBonus : false,
      spdBonus: details.spdBonus ? details.spdBonus : false,
      defBonus: details.defBonus ? details.defBonus : false,
      resBonus: details.resBonus ? details.resBonus : false
    });
  };

  /* Weapon Check Box Event Handler */
  handleWeaponClick = () => {
    /* Toggle Equipped Status */
    this.setState({ equipped: this.state.equipped ? false : true });

    /* Update HP Values if HP Bonus */
    let currHp = 0;
    if (Number.isInteger(this.state.hp) && this.state.hpBonus) {
      currHp = this.state.hp;

      if (this.state.equipped) {
        currHp = currHp - 3;
      } else {
        currHp = currHp + 3;
      }
      this.setState({ hp: currHp });
    }

    /* Update Attack Values for Weapon and/or Atk Bonus */
    let currAtk = 0;
    if (Number.isInteger(this.state.atk)) {
      currAtk = this.state.atk;

      if (this.state.equipped) {
        currAtk = currAtk - this.props.details.weapon;
        if (this.state.atkBonus) {
          currAtk = currAtk - 3;
        }
      } else {
        currAtk = currAtk + this.props.details.weapon;
        if (this.state.atkBonus) {
          currAtk = currAtk + 3;
        }
      }
    }
    this.setState({ atk: currAtk });

    /* Update Speed Values if Spd Bonus */
    let currSpd = 0;
    if (Number.isInteger(this.state.spd) && this.state.spdBonus) {
      currSpd = this.state.spd;

      if (this.state.equipped) {
        currSpd = currSpd - 3;
      } else {
        currSpd = currSpd + 3;
      }
      this.setState({ spd: currSpd });
    }

    /* Update Def Values if Def Bonus */
    let currDef = 0;
    if (Number.isInteger(this.state.def) && this.state.defBonus) {
      currDef = this.state.def;

      if (this.state.equipped) {
        currDef = currDef - 3;
      } else {
        currDef = currDef + 3;
      }
      this.setState({ def: currDef });
    }

    /* Update Res Values if Res Bonus */
    let currRes = 0;
    if (Number.isInteger(this.state.res) && this.state.resBonus) {
      currRes = this.state.res;

      if (this.state.equipped) {
        currRes = currRes - 3;
      } else {
        currRes = currRes + 3;
      }
      this.setState({ res: currRes });
    }
  };

  /* Handle Level 40 Radio Button Click */
  handleMaxClick = () => {
    if (this.props.details.name) {
      this.setState({
        maxLvl: true,
        hpBane: false,
        hpBoon: false,
        atkBane: false,
        atkBoon: false,
        spdBane: false,
        spdBoon: false,
        defBane: false,
        defBoon: false,
        resBane: false,
        resBoon: false,

        hp:
          this.props.details.hp[1] +
          (this.state.equipped ? (this.props.details.hpBonus ? 3 : 0) : 0),
        atk:
          this.props.details.atk[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0),
        spd:
          this.props.details.spd[1] +
          (this.state.equipped ? (this.props.details.spdBonus ? 3 : 0) : 0),
        def:
          this.props.details.def[1] +
          (this.state.equipped ? (this.props.details.defBonus ? 3 : 0) : 0),
        res:
          this.props.details.res[1] +
          (this.state.equipped ? (this.props.details.resBonus ? 3 : 0) : 0)
      });
    }
  };

  /* Handle Level 1 Radio Button Click */
  handleMinClick = () => {
    this.setState({ maxLvl: false });

    if (this.props.details.name) {
      this.setState({
        hpBane: false,
        hpBoon: false,
        atkBane: false,
        atkBoon: false,
        spdBane: false,
        spdBoon: false,
        defBane: false,
        defBoon: false,
        resBane: false,
        resBoon: false,

        hp:
          this.props.details.hpMin[1] +
          (this.state.equipped ? (this.props.details.hpBonus ? 3 : 0) : 0),
        atk:
          this.props.details.atkMin[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0),
        spd:
          this.props.details.spdMin[1] +
          (this.state.equipped ? (this.props.details.spdBonus ? 3 : 0) : 0),
        def:
          this.props.details.defMin[1] +
          (this.state.equipped ? (this.props.details.defBonus ? 3 : 0) : 0),
        res:
          this.props.details.resMin[1] +
          (this.state.equipped ? (this.props.details.resBonus ? 3 : 0) : 0)
      });
    }
  };

  /* HP Event Handlers */
  handleHpClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          this.props.details.hp[0] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[0] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      hpBane: true,
      hpBoon: false
    });
  };

  handleHpClickNeutral = () => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          this.props.details.hp[1] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[1] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      hpBane: false,
      hpBoon: false
    });
  };

  handleHpClickBoon = () => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          this.props.details.hp[2] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[2] +
          (this.state.equipped ? (this.state.hpBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      hpBane: false,
      hpBoon: true
    });
  };

  /* Atk Event Handlers */
  handleAtkClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        atk:
          this.props.details.atk[0] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[0] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    }

    this.setState({
      atkBane: true,
      atkBoon: false
    });
  };

  handleAtkClickNeutral = () => {
    if (this.state.maxLvl) {
      this.setState({
        atk:
          this.props.details.atk[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    }

    this.setState({
      atkBane: false,
      atkBoon: false
    });
  };

  handleAtkClickBoon = () => {
    if (this.state.maxLvl) {
      this.setState({
        atk:
          this.props.details.atk[2] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[2] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + 3
              : this.props.details.weapon
            : 0)
      });
    }

    this.setState({
      atkBane: false,
      atkBoon: true
    });
  };

  /* Spd Event Handlers */
  handleSpdClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        spd:
          this.props.details.spd[0] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[0] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      spdBane: true,
      spdBoon: false
    });
  };

  handleSpdClickNeutral = () => {
    if (this.state.maxLvl) {
      this.setState({
        spd:
          this.props.details.spd[1] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[1] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      spdBane: false,
      spdBoon: false
    });
  };

  handleSpdClickBoon = () => {
    if (this.state.maxLvl) {
      this.setState({
        spd:
          this.props.details.spd[2] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[2] +
          (this.state.equipped ? (this.state.spdBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      spdBane: false,
      spdBoon: true
    });
  };

  /* Def Event Handlers */
  handleDefClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        def:
          this.props.details.def[0] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[0] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      defBane: true,
      defBoon: false
    });
  };

  handleDefClickNeutral = () => {
    if (this.state.maxLvl) {
      this.setState({
        def:
          this.props.details.def[1] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[1] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      defBane: false,
      defBoon: false
    });
  };

  handleDefClickBoon = () => {
    if (this.state.maxLvl) {
      this.setState({
        def:
          this.props.details.def[2] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[2] +
          (this.state.equipped ? (this.state.defBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      defBane: false,
      defBoon: true
    });
  };

  /* Res Event Handlers */
  handleResClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        res:
          this.props.details.res[0] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[0] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      resBane: true,
      resBoon: false
    });
  };

  handleResClickNeutral = () => {
    if (this.state.maxLvl) {
      this.setState({
        res:
          this.props.details.res[1] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[1] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      resBane: false,
      resBoon: false
    });
  };

  handleResClickBoon = () => {
    if (this.state.maxLvl) {
      this.setState({
        res:
          this.props.details.res[2] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[2] +
          (this.state.equipped ? (this.state.resBonus ? 3 : 0) : 0)
      });
    }

    this.setState({
      resBane: false,
      resBoon: true
    });
  };

  render() {
    return (
      <div>
        {/* Row 1 - Icon, Name, and Epithet */}
        <div className="columns">
          <span className="column is-one-fifth is-narrow">
            <figure className="image is-96x96">
              <img
                src={
                  this.props.details.image
                    ? this.props.details.image
                    : feh.feh.image
                }
                alt="Portrait"
              />
            </figure>
          </span>
          <span className="column is-narrow">
            <font size="8">
              {this.props.details.name ? this.props.details.name : feh.feh.name}
              &nbsp;-&nbsp;
            </font>
            <font size="6">
              {this.props.details.epithet
                ? this.props.details.epithet
                : feh.feh.epithet}
            </font>
            &nbsp;&nbsp;
            <img
              src={
                this.props.details.typeImg
                  ? this.props.details.typeImg
                  : feh.feh.orbImg
              }
              alt="Type"
              width="22.5"
            />
            &nbsp;&nbsp;
            <img
              src={
                this.props.details.movementImg
                  ? this.props.details.movementImg
                  : feh.feh.featherImg
              }
              alt="Movement"
              width="20"
            />
          </span>
        </div>
        {/* Row 2 - HP and Weapon Equipped Checkox */}
        <div className="columns">
          <span className="column is-3 is-narrow">
            <font size="5">
              <b> &nbsp;&nbsp;HP: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className={
                    !this.state.hpBane
                      ? !this.state.hpBoon ? "button" : "button-boon"
                      : "button-bane"
                  }
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{this.state.hp ? this.state.hp : "Select"}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item-bane"
                    onClick={
                      this.props.details.hp ? this.handleHpClickBane : null
                    }
                  >
                    {this.props.details.hp
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hp[0] + 3
                            : this.props.details.hp[0]
                          : this.props.details.hp[0]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[0] + 3
                            : this.props.details.hpMin[0]
                          : this.props.details.hpMin[0]
                      : "Bane"}
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.hp ? this.handleHpClickNeutral : null
                    }
                  >
                    {this.props.details.hp
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hp[1] + 3
                            : this.props.details.hp[1]
                          : this.props.details.hp[1]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[1] + 3
                            : this.props.details.hpMin[1]
                          : this.props.details.hpMin[1]
                      : "Neutral"}
                  </a>
                  <a
                    className="dropdown-item-boon"
                    onClick={
                      this.props.details.hp ? this.handleHpClickBoon : null
                    }
                  >
                    {this.props.details.hp
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hp[2] + 3
                            : this.props.details.hp[2]
                          : this.props.details.hp[2]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[2] + 3
                            : this.props.details.hpMin[2]
                          : this.props.details.hpMin[2]
                      : "Boon"}
                  </a>
                </div>
              </div>
            </div>
          </span>
          {/* Checkbox and Radio Button */}
          <span className="column is-narrow">
            <label className="checkbox">
              <input type="checkbox" onClick={this.handleWeaponClick} /> Weapon
              Equipped
            </label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="level"
                  onClick={this.handleMinClick}
                />
                &nbsp;Level 1 &nbsp;&nbsp;&nbsp;
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="level"
                  onClick={this.handleMaxClick}
                  defaultChecked
                />
                &nbsp;Level 40
              </label>
            </div>
          </span>
          {/* Weapon Display */}
          <span className="column is-offset-1">
            <img
              src={misc.weapon_skill.image}
              alt={misc.weapon_skill.name}
              width="35"
            />
            <div className="dropdown">
              <button className="button">
                {this.props.details.weaponName
                  ? this.props.details.weaponName
                  : "None"}
              </button>
            </div>
          </span>
        </div>
        {/* Row 3 - Attack and Speed */}
        <div className="columns">
          <span className="column is-narrow">
            <font size="5">
              <b> ATK: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className={
                    !this.state.atkBane
                      ? !this.state.atkBoon ? "button" : "button-boon"
                      : "button-bane"
                  }
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{this.state.atk ? this.state.atk : "Select"}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item-bane"
                    onClick={
                      this.props.details.atk ? this.handleAtkClickBane : null
                    }
                  >
                    {this.props.details.atk
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atk[0] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atk[0] +
                              this.props.details.weapon
                          : this.props.details.atk[0]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[0] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atkMin[0] +
                              this.props.details.weapon
                          : this.props.details.atkMin[0]
                      : "Bane"}
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.atk ? this.handleAtkClickNeutral : null
                    }
                  >
                    {this.props.details.atk
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atk[1] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atk[1] +
                              this.props.details.weapon
                          : this.props.details.atk[1]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[1] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atkMin[1] +
                              this.props.details.weapon
                          : this.props.details.atkMin[1]
                      : "Neutral"}
                  </a>
                  <a
                    className="dropdown-item-boon"
                    onClick={
                      this.props.details.atk ? this.handleAtkClickBoon : null
                    }
                  >
                    {this.props.details.atk
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atk[2] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atk[2] +
                              this.props.details.weapon
                          : this.props.details.atk[2]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[2] +
                              this.props.details.weapon +
                              3
                            : this.props.details.atkMin[2] +
                              this.props.details.weapon
                          : this.props.details.atkMin[2]
                      : "Boon"}
                  </a>
                </div>
              </div>
            </div>
          </span>
          <span className="column is-narrow">
            <font size="5">
              <b> SPD: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className={
                    !this.state.spdBane
                      ? !this.state.spdBoon ? "button" : "button-boon"
                      : "button-bane"
                  }
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{this.state.spd ? this.state.spd : "Select"}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item-bane"
                    onClick={
                      this.props.details.spd ? this.handleSpdClickBane : null
                    }
                  >
                    {this.props.details.spd
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spd[0] + 3
                            : this.props.details.spd[0]
                          : this.props.details.spd[0]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[0] + 3
                            : this.props.details.spdMin[0]
                          : this.props.details.spdMin[0]
                      : "Bane"}
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.spd ? this.handleSpdClickNeutral : null
                    }
                  >
                    {this.props.details.spd
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spd[1] + 3
                            : this.props.details.spd[1]
                          : this.props.details.spd[1]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[1] + 3
                            : this.props.details.spdMin[1]
                          : this.props.details.spdMin[1]
                      : "Neutral"}
                  </a>
                  <a
                    className="dropdown-item-boon"
                    onClick={
                      this.props.details.spd ? this.handleSpdClickBoon : null
                    }
                  >
                    {this.props.details.spd
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spd[2] + 3
                            : this.props.details.spd[2]
                          : this.props.details.spd[2]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[2] + 3
                            : this.props.details.spdMin[2]
                          : this.props.details.spdMin[2]
                      : "Boon"}
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* Row 4 - Defense and Resistance */}
        <div className="columns">
          <span className="column is-narrow">
            <font size="5">
              <b> DEF: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className={
                    !this.state.defBane
                      ? !this.state.defBoon ? "button" : "button-boon"
                      : "button-bane"
                  }
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{this.state.def ? this.state.def : "Select"}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item-bane"
                    onClick={
                      this.props.details.def ? this.handleDefClickBane : null
                    }
                  >
                    {this.props.details.def
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.def[0] + 3
                            : this.props.details.def[0]
                          : this.props.details.def[0]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[0] + 3
                            : this.props.details.defMin[0]
                          : this.props.details.defMin[0]
                      : "Bane"}
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.def ? this.handleDefClickNeutral : null
                    }
                  >
                    {this.props.details.def
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.def[1] + 3
                            : this.props.details.def[1]
                          : this.props.details.def[1]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[1] + 3
                            : this.props.details.defMin[1]
                          : this.props.details.defMin[1]
                      : "Neutral"}
                  </a>
                  <a
                    className="dropdown-item-boon"
                    onClick={
                      this.props.details.def ? this.handleDefClickBoon : null
                    }
                  >
                    {this.props.details.def
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.def[2] + 3
                            : this.props.details.def[2]
                          : this.props.details.def[2]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[2] + 3
                            : this.props.details.defMin[2]
                          : this.props.details.defMin[2]
                      : "Boon"}
                  </a>
                </div>
              </div>
            </div>
          </span>
          <span className="column is-narrow">
            <font size="5">
              <b> RES: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className={
                    !this.state.resBane
                      ? !this.state.resBoon ? "button" : "button-boon"
                      : "button-bane"
                  }
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{this.state.res ? this.state.res : "Select"}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item-bane"
                    onClick={
                      this.props.details.res ? this.handleResClickBane : null
                    }
                  >
                    {this.props.details.res
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.res[0] + 3
                            : this.props.details.res[0]
                          : this.props.details.res[0]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[0] + 3
                            : this.props.details.resMin[0]
                          : this.props.details.resMin[0]
                      : "Bane"}
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.res ? this.handleResClickNeutral : null
                    }
                  >
                    {this.props.details.res
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.res[1] + 3
                            : this.props.details.res[1]
                          : this.props.details.res[1]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[1] + 3
                            : this.props.details.resMin[1]
                          : this.props.details.resMin[1]
                      : "Neutral"}
                  </a>
                  <a
                    className="dropdown-item-boon"
                    onClick={
                      this.props.details.res ? this.handleResClickBoon : null
                    }
                  >
                    {this.props.details.res
                      ? this.state.maxLvl
                        ? this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.res[2] + 3
                            : this.props.details.res[2]
                          : this.props.details.res[2]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[2] + 3
                            : this.props.details.resMin[2]
                          : this.props.details.resMin[2]
                      : "Boon"}
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* Add Button */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="button is-large">
          <p> Add to Barracks </p>
        </div>
      </div>
    );
  }
}

export default HeroMenuStats;
