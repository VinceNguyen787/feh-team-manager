import React from "react";

class Hero extends React.Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.props.fillInStats(this.props.details);
    this.setState({
      isActive: true
    });
  };

  deselect = () => {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    }
  };

  render() {
    const {
      name,
      image,
      type,
      typeImg,
      movement,
      movementImg
    } = this.props.details;
    return (
      <a
        className={
          this.state.isActive ? "panel-block is-active" : "panel-block"
        }
        onClick={this.handleClick}
      >
        <img src={image} alt={name} width="50" />
        <font size="6">
          <b>&nbsp;&nbsp;{name}&nbsp;</b>
        </font>
        <img src={typeImg} alt={type} width="23" /> &nbsp;&nbsp;
        <img src={movementImg} alt={movement} width="18.5" />
      </a>
    );
  }
}

export default Hero;
