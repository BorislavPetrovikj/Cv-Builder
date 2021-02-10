import React from "react";
import { Row } from "react-bootstrap";
import img from "../../../Assets/CV images/aleksandra.jpg";
import Col from "react-bootstrap/Col";
import styles from "./WebDevelopment.module.css";
import data from "../../../Data";

const WebDevelopment = (props) => {
  return (
    <div className={styles.WebDevelopment}>
      <Row>
        <Col>
          <Row>
            <Col md={3}>
              <img src={img} alt="img-1"></img>
            </Col>
            <Col md={9}>
              {data.map((person, index) => (
                <p>
                  Hello, {person.name} from {person.country}!
                </p>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WebDevelopment;
