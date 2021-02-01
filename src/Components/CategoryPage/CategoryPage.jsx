import React from "react";
import Banner from "../Banner/Banner";
import CategoryCard from "./CategoryCard/CategoryCard";
import "./CategoryPage.css";

const CategoryPage = (props) => {
  return (
    <div className="CategoryPage bg">
      <div className="row marginRow">
        <div className="col-12 text-left p-4">
          <h1>Choose your Category</h1>
        </div>
        <div class="col-md-3  pt-2">
          <CategoryCard title={"Webdevelopment"} />
        </div>
        <div class="col-md-3 pt-2">
          {" "}
          <CategoryCard title={"Data sience"} />
        </div>
        <div class="col-md-3 pt-2">
          {" "}
          <CategoryCard title={"Digital Marketinv"} />
        </div>
        <div class="col-md-3  pt-2">
          {" "}
          <CategoryCard title={"Design"} />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default CategoryPage;
