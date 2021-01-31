import React from "react";
import { Link } from "react-router-dom";
// import Banner from "../Banner/Banner";
import "./CategoryPage.css";

const CategoryPage = (props) => {
  return (
    <div className="CategoryPage bg">
      <div className="row marginRow">
        <div className="col-12 text-left p-4">
          <h1>Choose your Category</h1>
        </div>
        <div class="col">
          <div class="card p-4">
            <div class="card-body  p-5">
              <h3 class="card-title">Web development</h3>
            </div>
            <Link class="text-right" to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary ">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col">
          <div class="card p-4">
            <div class="card-body  p-5">
              <h3 class="card-title">Web development</h3>
            </div>
            <Link class="text-right" to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary ">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col">
          <div class="card p-4">
            <div class="card-body  p-5">
              <h3 class="card-title">Web development</h3>
            </div>
            <Link class="text-right" to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary ">
                Choose
              </button>
            </Link>{" "}
          </div>
        </div>
        <div class="col">
          <div class="card p-4">
            <div class="card-body  p-5">
              <h3 class="card-title">Web development</h3>
            </div>
            <Link class="text-right" to="/resumes">
              {" "}
              <button type="button" class="btn btn-primary ">
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
