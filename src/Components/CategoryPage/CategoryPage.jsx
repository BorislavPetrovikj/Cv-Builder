import React from "react";
import Banner from "../Banner/Banner";
import CategoryCard from "./CategoryCard/CategoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CategoryPage.module.css";
// import { Container } from "react-bootstrap";


const CategoryPage = (props) => {
  return (
    <div className={`${styles.CategoryPage} ${styles.bg}`}>
   
            
     
    <Row >
          <Col md={3}>
            <CategoryCard title={"Web Development"} />
          </Col>
          <Col md={3}>
            <CategoryCard title={"Data Sience"} />
          </Col>
          <Col md={3}>
            <CategoryCard title={"Digital Marketing"} />
          </Col>
          <Col md={3}>
            <CategoryCard title={"Design"} />
          </Col>
        </Row>
   

      <Banner />
    </div>
  );
};

export default CategoryPage;
