import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  return (
    <div className="CategoryCard">
      <Col className="pt-4">
        <Card className="p-4" style={{ width: "18rem" }}>
          <Card.Body className="p-4">
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
          <Link class="text-right  " to="/resumes">
            {" "}
            <button type="button" class="btn btn-primary ">
              Choose
            </button>
          </Link>{" "}
        </Card>
      </Col>
    </div>
  );
};

export default CategoryCard;
