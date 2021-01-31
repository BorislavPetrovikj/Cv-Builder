import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Resumes.css";
class Resumes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Resumes bg">
        <Link to="/cv">
          {" "}
          <button type="button" class="btn btn-primary">
            CV
          </button>
        </Link>
        <Link to="/linkedin">
          {" "}
          <button type="button" class="btn btn-primary">
            Linkedin
          </button>
        </Link>
        <Link to="/wearelaika">
          {" "}
          <button type="button" class="btn btn-primary">
            WeareLaika
          </button>
        </Link>
        <Banner />
      </div>
    );
  }
}

export default Resumes;
