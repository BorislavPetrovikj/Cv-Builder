import React, { Component } from "react";
import WebDevelopment from "./CategoryCv/WebDevelopment";
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
          <div>inputi for editing</div>
        ) : (
          <div>
            <WebDevelopment />
          </div>
        )}
      </div>
    );
  }
}

export default Cv;
