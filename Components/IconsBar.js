import React from "react";
import weaponIcons from "../weapon-icons";
import movementIcons from "../movement-icons";

// Weapon Icons Bar on Hero Browser
class IconsBar extends React.Component {
  render() {
    return (
      <div>
        {/* Weapon Icon Bar */}
        <div className="panel-tabs">
          <div className="tabs is-boxed">
            <ul>
              <li className="is-active">
                <a>
                  <img src={weaponIcons.all.image} alt="All" width="23" />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.redSword.image}
                    alt="Red Sword"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.blueLance.image}
                    alt="Blue Lance"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.greenAxe.image}
                    alt="Green Axe"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.redTome.image}
                    alt="Red Tome"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.blueTome.image}
                    alt="Blue Tome"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.greenTome.image}
                    alt="Green Tome"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img src={weaponIcons.bow.image} alt="Bow" width="23" />
                </a>
              </li>
              <li>
                <a>
                  <img src={weaponIcons.dagger.image} alt="Dagger" width="23" />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={weaponIcons.staff.image}
                    alt="Red Sword"
                    width="25"
                  />
                </a>
              </li>
              <li>
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
              <li className="">
                <a>
                  <img src={weaponIcons.all.image} alt="All" width="23" />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={movementIcons.infantry.image}
                    alt="Infantry"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={movementIcons.cavalry.image}
                    alt="Cavalry"
                    width="23"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src={movementIcons.flying.image}
                    alt="Flying"
                    width="23"
                  />
                </a>
              </li>
              <li>
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
