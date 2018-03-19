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
    resBonus: false,

    merges: 0,
    hpMergeBonus: 0,
    atkMergeBonus: 0,
    spdMergeBonus: 0,
    defMergeBonus: 0,
    resMergeBonus: 0
  };

  setNameEpithet = (name, epithet) => {
    this.setState({
      name: name,
      epithet: epithet
    });
  };

  // Set Stats
  setStats = details => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          details.hp[1] +
          (this.state.equipped
            ? details.hpBonus ? details.bonusValueHp : 0
            : 0),
        atk:
          details.atk[1] +
          (this.state.equipped
            ? details.atkBonus
              ? details.weapon + details.bonusValueAtk
              : details.weapon
            : 0),
        spd:
          details.spd[1] +
          (this.state.equipped
            ? details.spdBonus ? details.bonusValueSpd : 0
            : 0),
        def:
          details.def[1] +
          (this.state.equipped
            ? details.defBonus ? details.bonusValueDef : 0
            : 0),
        res:
          details.res[1] +
          (this.state.equipped
            ? details.resBonus ? details.bonusValueRes : 0
            : 0)
      });
    } else {
      this.setState({
        hp:
          details.hpMin[1] +
          (this.state.equipped
            ? details.hpBonus ? details.bonusValueHp : 0
            : 0),
        atk:
          details.atkMin[1] +
          (this.state.equipped
            ? details.atkBonus
              ? details.weapon + details.bonusValueAtk
              : details.weapon
            : 0),
        spd:
          details.spdMin[1] +
          (this.state.equipped
            ? details.spdBonus ? details.bonusValueSpd : 0
            : 0),
        def:
          details.defMin[1] +
          (this.state.equipped
            ? details.defBonus ? details.bonusValueDef : 0
            : 0),
        res:
          details.resMin[1] +
          (this.state.equipped
            ? details.resBonus ? details.bonusValueRes : 0
            : 0)
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
      resBonus: details.resBonus ? details.resBonus : false,

      merges: 0,
      hpMergeBonus: 0,
      atkMergeBonus: 0,
      spdMergeBonus: 0,
      defMergeBonus: 0,
      resMergeBonus: 0
    });
  };

  // Weapon Check Box Event Handler
  handleWeaponClick = () => {
    /* Toggle Equipped Status */
    this.setState({ equipped: this.state.equipped ? false : true });

    // Update HP Values if HP Bonus
    let currHp = 0;
    if (Number.isInteger(this.state.hp) && this.state.hpBonus) {
      currHp = this.state.hp;

      if (this.state.equipped) {
        currHp = currHp - this.props.details.bonusValueHp;
      } else {
        currHp = currHp + this.props.details.bonusValueHp;
      }
      this.setState({ hp: currHp });
    }

    // Update Attack Values for Weapon and/or Atk Bonus
    let currAtk = 0;
    if (Number.isInteger(this.state.atk)) {
      currAtk = this.state.atk;

      if (this.state.equipped) {
        currAtk = currAtk - this.props.details.weapon;
        if (this.state.atkBonus) {
          currAtk = currAtk - this.props.details.bonusValueAtk;
        }
      } else {
        currAtk = currAtk + this.props.details.weapon;
        if (this.state.atkBonus) {
          currAtk = currAtk + this.props.details.bonusValueAtk;
        }
      }
    }
    this.setState({ atk: currAtk });

    // Update Speed Values if Spd Bonus
    let currSpd = 0;
    if (Number.isInteger(this.state.spd) && this.state.spdBonus) {
      currSpd = this.state.spd;

      if (this.state.equipped) {
        currSpd = currSpd - this.props.details.bonusValueSpd;
      } else {
        currSpd = currSpd + this.props.details.bonusValueSpd;
      }
      this.setState({ spd: currSpd });
    }

    // Update Def Values if Def Bonus
    let currDef = 0;
    if (Number.isInteger(this.state.def) && this.state.defBonus) {
      currDef = this.state.def;

      if (this.state.equipped) {
        currDef = currDef - this.props.details.bonusValueDef;
      } else {
        currDef = currDef + this.props.details.bonusValueDef;
      }
      this.setState({ def: currDef });
    }

    // Update Res Values if Res Bonus
    let currRes = 0;
    if (Number.isInteger(this.state.res) && this.state.resBonus) {
      currRes = this.state.res;

      if (this.state.equipped) {
        currRes = currRes - this.props.details.bonusValueRes;
      } else {
        currRes = currRes + this.props.details.bonusValueRes;
      }
      this.setState({ res: currRes });
    }
  };

  // Handle Level 40 Radio Button Click
  handleMaxClick = () => {
    this.setState({ maxLvl: true });

    if (this.props.details.name) {
      // Get current user selected stats
      let statArr = this.getCurrMaxStats();

      this.setState({
        hp:
          statArr[0] +
          (this.state.equipped
            ? this.props.details.hpBonus ? this.props.details.bonusValueHp : 0
            : 0),
        atk:
          statArr[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0),
        spd:
          statArr[2] +
          (this.state.equipped
            ? this.props.details.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0),
        def:
          statArr[3] +
          (this.state.equipped
            ? this.props.details.defBonus ? this.props.details.bonusValueDef : 0
            : 0),
        res:
          statArr[4] +
          (this.state.equipped
            ? this.props.details.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    }
  };

  // Handle Level 1 Radio Button Click
  handleMinClick = () => {
    this.setState({ maxLvl: false });

    if (this.props.details.name) {
      // Get current user selected stats
      let statArr = this.getCurrMinStats();

      this.setState({
        hp:
          statArr[0] +
          (this.state.equipped
            ? this.props.details.hpBonus ? this.props.details.bonusValueHp : 0
            : 0),
        atk:
          statArr[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0),
        spd:
          statArr[2] +
          (this.state.equipped
            ? this.props.details.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0),
        def:
          statArr[3] +
          (this.state.equipped
            ? this.props.details.defBonus ? this.props.details.bonusValueDef : 0
            : 0),
        res:
          statArr[4] +
          (this.state.equipped
            ? this.props.details.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    }
  };

  // HP Event Handlers
  handleHpClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        hp:
          this.props.details.hp[0] +
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[0] +
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
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
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[1] +
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
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
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
      });
    } else {
      this.setState({
        hp:
          this.props.details.hpMin[2] +
          (this.state.equipped
            ? this.state.hpBonus ? this.props.details.bonusValueHp : 0
            : 0)
      });
    }

    this.setState({
      hpBane: false,
      hpBoon: true
    });
  };

  // Atk Event Handlers
  handleAtkClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        atk:
          this.props.details.atk[0] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[0] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
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
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[1] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
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
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0)
      });
    } else {
      this.setState({
        atk:
          this.props.details.atkMin[2] +
          (this.state.equipped
            ? this.props.details.atkBonus
              ? this.props.details.weapon + this.props.details.bonusValueAtk
              : this.props.details.weapon
            : 0)
      });
    }

    this.setState({
      atkBane: false,
      atkBoon: true
    });
  };

  // Spd Event Handlers
  handleSpdClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        spd:
          this.props.details.spd[0] +
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[0] +
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
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
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[1] +
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
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
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
      });
    } else {
      this.setState({
        spd:
          this.props.details.spdMin[2] +
          (this.state.equipped
            ? this.state.spdBonus ? this.props.details.bonusValueSpd : 0
            : 0)
      });
    }

    this.setState({
      spdBane: false,
      spdBoon: true
    });
  };

  // Def Event Handlers
  handleDefClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        def:
          this.props.details.def[0] +
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[0] +
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
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
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[1] +
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
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
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
      });
    } else {
      this.setState({
        def:
          this.props.details.defMin[2] +
          (this.state.equipped
            ? this.state.defBonus ? this.props.details.bonusValueDef : 0
            : 0)
      });
    }

    this.setState({
      defBane: false,
      defBoon: true
    });
  };

  // Res Event Handlers
  handleResClickBane = () => {
    if (this.state.maxLvl) {
      this.setState({
        res:
          this.props.details.res[0] +
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[0] +
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
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
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[1] +
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
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
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    } else {
      this.setState({
        res:
          this.props.details.resMin[2] +
          (this.state.equipped
            ? this.state.resBonus ? this.props.details.bonusValueRes : 0
            : 0)
      });
    }

    this.setState({
      resBane: false,
      resBoon: true
    });
  };

  // Merge Event Handlers
  handle0MergeClick = () => {
    this.setState({
      merges: 0,
      hpMergeBonus: 0,
      atkMergeBonus: 0,
      spdMergeBonus: 0,
      defMergeBonus: 0,
      resMergeBonus: 0
    });
  };

  handle1MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 1;
    bonusArr[rankArr[1]] = 1;

    this.setState({
      merges: 1,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle2MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 1;
    bonusArr[rankArr[1]] = 1;
    bonusArr[rankArr[2]] = 1;
    bonusArr[rankArr[3]] = 1;

    this.setState({
      merges: 2,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle3MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 2;
    bonusArr[rankArr[1]] = 1;
    bonusArr[rankArr[2]] = 1;
    bonusArr[rankArr[3]] = 1;
    bonusArr[rankArr[4]] = 1;

    this.setState({
      merges: 3,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle4MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 2;
    bonusArr[rankArr[1]] = 2;
    bonusArr[rankArr[2]] = 2;
    bonusArr[rankArr[3]] = 1;
    bonusArr[rankArr[4]] = 1;

    this.setState({
      merges: 4,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle5MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 2;
    bonusArr[rankArr[1]] = 2;
    bonusArr[rankArr[2]] = 2;
    bonusArr[rankArr[3]] = 2;
    bonusArr[rankArr[4]] = 2;

    this.setState({
      merges: 5,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle6MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 3;
    bonusArr[rankArr[1]] = 3;
    bonusArr[rankArr[2]] = 2;
    bonusArr[rankArr[3]] = 2;
    bonusArr[rankArr[4]] = 2;

    this.setState({
      merges: 6,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle7MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 3;
    bonusArr[rankArr[1]] = 3;
    bonusArr[rankArr[2]] = 3;
    bonusArr[rankArr[3]] = 3;
    bonusArr[rankArr[4]] = 2;

    this.setState({
      merges: 7,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle8MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 4;
    bonusArr[rankArr[1]] = 3;
    bonusArr[rankArr[2]] = 3;
    bonusArr[rankArr[3]] = 3;
    bonusArr[rankArr[4]] = 3;

    this.setState({
      merges: 8,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle9MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 4;
    bonusArr[rankArr[1]] = 4;
    bonusArr[rankArr[2]] = 4;
    bonusArr[rankArr[3]] = 3;
    bonusArr[rankArr[4]] = 3;

    this.setState({
      merges: 9,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  handle10MergeClick = () => {
    let rankArr = this.rankStats();
    let bonusArr = [0, 0, 0, 0, 0];

    bonusArr[rankArr[0]] = 4;
    bonusArr[rankArr[1]] = 4;
    bonusArr[rankArr[2]] = 4;
    bonusArr[rankArr[3]] = 4;
    bonusArr[rankArr[4]] = 4;

    this.setState({
      merges: 10,
      hpMergeBonus: bonusArr[0],
      atkMergeBonus: bonusArr[1],
      spdMergeBonus: bonusArr[2],
      defMergeBonus: bonusArr[3],
      resMergeBonus: bonusArr[4]
    });
  };

  // Helper Methods
  getCurrMinStats = () => {
    let currHp, currAtk, currSpd, currDef, currRes;
    let statArr = [];

    // Set curr variables to user-selected stats
    if (this.state.hpBane) {
      currHp = this.props.details.hpMin[0];
    } else if (this.state.hpBoon) {
      currHp = this.props.details.hpMin[2];
    } else {
      currHp = this.props.details.hpMin[1];
    }

    if (this.state.atkBane) {
      currAtk = this.props.details.atkMin[0];
    } else if (this.state.atkBoon) {
      currAtk = this.props.details.atkMin[2];
    } else {
      currAtk = this.props.details.atkMin[1];
    }

    if (this.state.spdBane) {
      currSpd = this.props.details.spdMin[0];
    } else if (this.state.spdBoon) {
      currSpd = this.props.details.spdMin[2];
    } else {
      currSpd = this.props.details.spdMin[1];
    }

    if (this.state.defBane) {
      currDef = this.props.details.defMin[0];
    } else if (this.state.defBoon) {
      currDef = this.props.details.defMin[2];
    } else {
      currDef = this.props.details.defMin[1];
    }

    if (this.state.resBane) {
      currRes = this.props.details.resMin[0];
    } else if (this.state.resBoon) {
      currRes = this.props.details.resMin[2];
    } else {
      currRes = this.props.details.resMin[1];
    }

    // Push all current stats onto stat array
    statArr.push(currHp);
    statArr.push(currAtk);
    statArr.push(currSpd);
    statArr.push(currDef);
    statArr.push(currRes);

    return statArr;
  };

  getCurrMaxStats = () => {
    let currHp, currAtk, currSpd, currDef, currRes;
    let statArr = [];

    // Set curr variables to user-selected stats
    if (this.state.hpBane) {
      currHp = this.props.details.hp[0];
    } else if (this.state.hpBoon) {
      currHp = this.props.details.hp[2];
    } else {
      currHp = this.props.details.hp[1];
    }

    if (this.state.atkBane) {
      currAtk = this.props.details.atk[0];
    } else if (this.state.atkBoon) {
      currAtk = this.props.details.atk[2];
    } else {
      currAtk = this.props.details.atk[1];
    }

    if (this.state.spdBane) {
      currSpd = this.props.details.spd[0];
    } else if (this.state.spdBoon) {
      currSpd = this.props.details.spd[2];
    } else {
      currSpd = this.props.details.spd[1];
    }

    if (this.state.defBane) {
      currDef = this.props.details.def[0];
    } else if (this.state.defBoon) {
      currDef = this.props.details.def[2];
    } else {
      currDef = this.props.details.def[1];
    }

    if (this.state.resBane) {
      currRes = this.props.details.res[0];
    } else if (this.state.resBoon) {
      currRes = this.props.details.res[2];
    } else {
      currRes = this.props.details.res[1];
    }

    // Push all current stats onto stat array
    statArr.push(currHp);
    statArr.push(currAtk);
    statArr.push(currSpd);
    statArr.push(currDef);
    statArr.push(currRes);

    return statArr;
  };

  // Rank Highest Stats
  rankStats = () => {
    let statArr = [];
    let rankArr = [];

    statArr = this.getCurrMinStats();

    // Rank each stat by value (highest first)
    let highestIndex = 0;
    let currStatValue = 0;

    /* Create rankArr example: [2 3 0 1 4] means:
       highest stat is in index 2, which is spd
       second highest stat is in index 3, which is def, etc */
    for (let i = 0; i < 5; i++) {
      highestIndex = 0;
      currStatValue = statArr[0];

      for (let j = 0; j < 5; j++) {
        if (currStatValue < statArr[j]) {
          highestIndex = j;
          currStatValue = statArr[j];
        }
      }

      statArr[highestIndex] = 0;
      rankArr.push(highestIndex);
    }

    return rankArr;
  };

  render() {
    return (
      <div>
        {/* Row 1 - Icon, Name, and Epithet */}
        <div className="columns">
          <span className="column is-narrow">
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
            <div
              className={
                this.state.merges === 0 ? "dropdown is-hoverable" : "dropdown"
              }
            >
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
                  <span>
                    {this.state.hp
                      ? this.state.hpMergeBonus + this.state.hp
                      : "Select"}
                  </span>
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
                            ? this.props.details.hp[0] +
                              this.props.details.bonusValueHp
                            : this.props.details.hp[0]
                          : this.props.details.hp[0]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[0] +
                              this.props.details.bonusValueHp
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
                            ? this.props.details.hp[1] +
                              this.props.details.bonusValueHp
                            : this.props.details.hp[1]
                          : this.props.details.hp[1]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[1] +
                              this.props.details.bonusValueHp
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
                            ? this.props.details.hp[2] +
                              this.props.details.bonusValueHp
                            : this.props.details.hp[2]
                          : this.props.details.hp[2]
                        : this.state.equipped
                          ? this.props.details.hpBonus
                            ? this.props.details.hpMin[2] +
                              this.props.details.bonusValueHp
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
          {/* Merges Dropdown */}
          <span className="column is-narrow">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>
                    {this.props.details.name
                      ? this.state.merges ? "+" + this.state.merges : "+0"
                      : "Merges"}
                  </span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle0MergeClick : null
                    }
                  >
                    +0
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle1MergeClick : null
                    }
                  >
                    +1
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle2MergeClick : null
                    }
                  >
                    +2
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle3MergeClick : null
                    }
                  >
                    +3
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle4MergeClick : null
                    }
                  >
                    +4
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle5MergeClick : null
                    }
                  >
                    +5
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle6MergeClick : null
                    }
                  >
                    +6
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle7MergeClick : null
                    }
                  >
                    +7
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle8MergeClick : null
                    }
                  >
                    +8
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle9MergeClick : null
                    }
                  >
                    +9
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={
                      this.props.details.name ? this.handle10MergeClick : null
                    }
                  >
                    +10
                  </a>
                </div>
                <font color="red" size="1">
                  NOTE: <br /> Set Boon/Bane BEFORE setting merge level.{" "}
                </font>
              </div>
            </div>
          </span>
          {/* Weapon Display */}
          <span className="column">
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
            <div
              className={
                this.state.merges === 0 ? "dropdown is-hoverable" : "dropdown"
              }
            >
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
                  <span>
                    {this.state.atk
                      ? this.state.atkMergeBonus + this.state.atk
                      : "Select"}
                  </span>
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
                              this.props.details.bonusValueAtk
                            : this.props.details.atk[0] +
                              this.props.details.weapon
                          : this.props.details.atk[0]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[0] +
                              this.props.details.weapon +
                              this.props.details.bonusValueAtk
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
                              this.props.details.bonusValueAtk
                            : this.props.details.atk[1] +
                              this.props.details.weapon
                          : this.props.details.atk[1]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[1] +
                              this.props.details.weapon +
                              this.props.details.bonusValueAtk
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
                              this.props.details.bonusValueAtk
                            : this.props.details.atk[2] +
                              this.props.details.weapon
                          : this.props.details.atk[2]
                        : this.state.equipped
                          ? this.props.details.atkBonus
                            ? this.props.details.atkMin[2] +
                              this.props.details.weapon +
                              this.props.details.bonusValueAtk
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
            <div
              className={
                this.state.merges === 0 ? "dropdown is-hoverable" : "dropdown"
              }
            >
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
                  <span>
                    {this.state.spd
                      ? this.state.spdMergeBonus + this.state.spd
                      : "Select"}
                  </span>
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
                            ? this.props.details.spd[0] +
                              this.props.details.bonusValueSpd
                            : this.props.details.spd[0]
                          : this.props.details.spd[0]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[0] +
                              this.props.details.bonusValueSpd
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
                            ? this.props.details.spd[1] +
                              this.props.details.bonusValueSpd
                            : this.props.details.spd[1]
                          : this.props.details.spd[1]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[1] +
                              this.props.details.bonusValueSpd
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
                            ? this.props.details.spd[2] +
                              this.props.details.bonusValueSpd
                            : this.props.details.spd[2]
                          : this.props.details.spd[2]
                        : this.state.equipped
                          ? this.props.details.spdBonus
                            ? this.props.details.spdMin[2] +
                              this.props.details.bonusValueSpd
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
            <div
              className={
                this.state.merges === 0 ? "dropdown is-hoverable" : "dropdown"
              }
            >
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
                  <span>
                    {this.state.def
                      ? this.state.defMergeBonus + this.state.def
                      : "Select"}
                  </span>
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
                            ? this.props.details.def[0] +
                              this.props.details.bonusValueDef
                            : this.props.details.def[0]
                          : this.props.details.def[0]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[0] +
                              this.props.details.bonusValueDef
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
                            ? this.props.details.def[1] +
                              this.props.details.bonusValueDef
                            : this.props.details.def[1]
                          : this.props.details.def[1]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[1] +
                              this.props.details.bonusValueDef
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
                            ? this.props.details.def[2] +
                              this.props.details.bonusValueDef
                            : this.props.details.def[2]
                          : this.props.details.def[2]
                        : this.state.equipped
                          ? this.props.details.defBonus
                            ? this.props.details.defMin[2] +
                              this.props.details.bonusValueDef
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
            <div
              className={
                this.state.merges === 0 ? "dropdown is-hoverable" : "dropdown"
              }
            >
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
                  <span>
                    {this.state.res
                      ? this.state.resMergeBonus + this.state.res
                      : "Select"}
                  </span>
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
                            ? this.props.details.res[0] +
                              this.props.details.bonusValueRes
                            : this.props.details.res[0]
                          : this.props.details.res[0]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[0] +
                              this.props.details.bonusValueRes
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
                            ? this.props.details.res[1] +
                              this.props.details.bonusValueRes
                            : this.props.details.res[1]
                          : this.props.details.res[1]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[1] +
                              this.props.details.bonusValueRes
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
                            ? this.props.details.res[2] +
                              this.props.details.bonusValueRes
                            : this.props.details.res[2]
                          : this.props.details.res[2]
                        : this.state.equipped
                          ? this.props.details.resBonus
                            ? this.props.details.resMin[2] +
                              this.props.details.bonusValueRes
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
