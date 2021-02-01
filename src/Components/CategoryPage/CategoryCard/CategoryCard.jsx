import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  return (
    <div className="CategoryCard">
      <div class="col">
        <div class="card p-5">
          <div class="card-body p-4">
            <h3 class="card-title">{props.title}</h3>
          </div>
          <Link class="text-right" to="/resumes">
            {" "}
            <button type="button" class="btn btn-primary ">
              Choose
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
