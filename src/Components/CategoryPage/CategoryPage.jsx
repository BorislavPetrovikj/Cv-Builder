import React from "react";
import { Link } from "react-router-dom";
// import Banner from "../Banner/Banner";
import "./CategoryPage.css";

const CategoryPage = (props) => {
  return (
    <div className="CategoryPage bg">
      <div className="row">
        <div className="col-12 text-left p-4">
          <h1>Choose your Category</h1>
        </div>
        <div class="col-sm-3">
          <div class="card p-5">
            <div class="card-body  p-5">
              <h3 class="card-title">Web development</h3>
            </div>
            <Link to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary text-right">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card p-5">
            <div class="card-body  p-5">
              <h3 class="card-title">Data Sience</h3>
            </div>
            <Link to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card p-5 ">
            <div class="card-body  p-5 ">
              <h3 class="card-title">Digital Marketing</h3>
            </div>
            <Link to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card p-5">
            <div class="card-body  p-5">
              <h3 class="card-title">Design</h3>
            </div>
            <Link to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default CategoryPage;
