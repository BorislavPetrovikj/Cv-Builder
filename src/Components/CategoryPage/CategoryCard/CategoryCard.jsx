import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styles from "./CateogryCard.module.css";

const CategoryCard = (props) => {
  return (
    <div className="CategoryCard">
      <Col className="pt-4">
        <Card className={styles.card} style={{ width: "20rem", height: "18rem" }}>
          <Card.Body className="pt-5 ">
            <Card.Title className="pt-4 font-weight-bold ">{props.title}</Card.Title>
          </Card.Body>
          <Link class="text-right  " to="/resumes">
            {" "}
            <button className={`${styles.button} ${styles.purpleBtn}`}>
              Choose
            </button>
          </Link>{" "}
        </Card>
      </Col>
    </div>
  );
};

export default CategoryCard;
