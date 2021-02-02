import React from "react";
import Banner from "../Banner/Banner";
import CategoryCard from "./CategoryCard/CategoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.css";

const CategoryPage = (props) => {
  return (
    <div className={`${styles.CategoryPage} ${styles.bg}`}>
      <Row className={styles.marginRow}>
        <Col md={3}>
          <CategoryCard title={"Webdevelopment"} />
        </Col>
        <Col md={3}>
          <CategoryCard title={"Data Sience"} />
        </Col>
        <Col md={3}>
          <CategoryCard title={"Design"} />
        </Col>
        <Col md={3}>
          <CategoryCard title={"Webdevelopment"} />
        </Col>
      </Row>

      <Banner />
    </div>
  );
};

export default CategoryPage;
