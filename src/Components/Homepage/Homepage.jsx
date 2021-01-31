import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className="Homepage bg">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 text-left flex-container ">
            <div className="child">
              <h1>
                The Ultimate <br></br>CV and Portfolio Check-List
              </h1>
              <p className="p-style mt-3">
                Are you a Web Developer, Data Scientist, Digital Marketer or a
                Designer?
                <br></br>
                Have your CV and portfolio in scheck and create a 5-star
                representation
                <br></br>
                of your skills with this guide.
              </p>
              <Link to="/category">
                {" "}
                <button type="button" class="btn btn-primary mt-4">
                  Step Inside
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 homepage-Image "></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
