import React, { Component } from "react";
import styles from "./Cv.module.css";

class Cv extends Component {
  state = {
    isEditMode: false,
  };

  handleClick = () => {
    console.log("clicked");
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  render() {
    return (
      <div className={styles.cv}>
        <button onClick={this.handleClick}>click me</button>
        {this.state.isEditMode ? (
          <div>inputi shto ke ti ovozmozat editiranje tuka</div>
        ) : (
          <div>divovi kaj shto ke go prikazes tekstot od cv-to</div>
        )}
      </div>
    );
  }
}

export default Cv;
