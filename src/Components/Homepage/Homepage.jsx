import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./Homepage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Homepage = (props) => {
  return (
    <div className={styles.Homepage}>
      <Container>
        <Row>
          <Col md={6} className={styles.flexcontainer}>
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
          </Col>
          <Col md={6} className={styles.homepageImage}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
