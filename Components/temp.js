import React from "react";
import heroes from "../heroes";
import PropTypes from "prop-types";
import Select from "react-select";

class HeroMenuStats extends React.Component {
  state = {
    options: [
      { value: 10, label: "Ten" },
      { value: 11, label: "Eleven" },
      { value: 12, label: "Twelve" },
      { value: 23, label: "Twenty-three" },
      { value: 24, label: "Twenty-four" }
    ],
    matchPos: "any",
    matchValue: true,
    matchLabel: true,
    value: null,
    multi: false
  };
  onChangeMatchStart = event => {
    this.setState({
      matchPos: event.target.checked ? "start" : "any"
    });
  };
  onChangeMatchValue = event => {
    this.setState({
      matchValue: event.target.checked
    });
  };
  onChangeMatchLabel = event => {
    this.setState({
      matchLabel: event.target.checked
    });
  };
  onChange = value => {
    this.setState({ value });
    console.log("Numeric Select value changed to", value);
  };
  onChangeMulti = event => {
    this.setState({
      multi: event.target.checked
    });
  };
  render() {
    var matchProp = "any";
    if (this.state.matchLabel && !this.state.matchValue) {
      matchProp = "label";
    }
    if (!this.state.matchLabel && this.state.matchValue) {
      matchProp = "value";
    }
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
                    : heroes.feh.image
                }
                alt="TODO"
              />
            </figure>
          </span>
          <span className="column is-narrow">
            <font size="10">
              {this.props.details.name
                ? this.props.details.name
                : heroes.feh.name}
              &nbsp;-&nbsp;
            </font>
            <font size="6">
              {this.props.details.epithet
                ? this.props.details.epithet
                : heroes.feh.epithet}
            </font>
          </span>
        </div>
        {/* Row 2 - HP and Weapon Equipped Checkox */}
        <div className="columns">
          <span className="column is-two-thirds is-narrow">
            <font size="5">
              <b> &nbsp;&nbsp;HP: </b>
            </font>
            <div className="section">
              <Select
                matchPos={this.state.matchPos}
                matchProp={matchProp}
                multi={this.state.multi}
                onChange={this.onChange}
                options={this.state.options}
                simpleValue
                value={this.state.value}
              />
            </div>
          </span>
          <span className="column is-narrow">
            <label className="checkbox">
              <input type="checkbox" /> Weapon Equipped
            </label>
          </span>
        </div>
        {/* Row 3 - Attack and Speed */}
        <div className="columns">
          <span className="column is-narrow">
            <font size="5">
              <b>ATK: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Select</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="123" className="dropdown-item">
                    Bane
                  </a>
                  <a href="123" className="dropdown-item is-active">
                    Neutral
                  </a>
                  <a href="123" className="dropdown-item">
                    Boon
                  </a>
                </div>
              </div>
            </div>
          </span>
          <span className="column is-narrow">
            <font size="5">
              <b>SPD: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Select</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="123" className="dropdown-item">
                    Bane
                  </a>
                  <a href="123" className="dropdown-item is-active">
                    Neutral
                  </a>
                  <a href="123" className="dropdown-item">
                    Boon
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
              <b>DEF: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Select</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="123" className="dropdown-item">
                    Bane
                  </a>
                  <a href="123" className="dropdown-item is-active">
                    Neutral
                  </a>
                  <a href="123" className="dropdown-item">
                    Boon
                  </a>
                </div>
              </div>
            </div>
          </span>
          <span className="column is-narrow">
            <font size="5">
              <b>RES: </b>
            </font>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Select</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="123" className="dropdown-item">
                    Bane
                  </a>
                  <a href="123" className="dropdown-item is-active">
                    Neutral
                  </a>
                  <a href="123" className="dropdown-item">
                    Boon
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* Add Button */}
        <div className="buttons is-centered">
          <div className="button is-large">
            <p> Add to Barracks </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroMenuStats;
