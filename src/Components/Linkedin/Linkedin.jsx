import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/LinkedIn screenshots/bill1.png";
import img2 from "../../Assets/LinkedIn screenshots/bill2.png";
import img3 from "../../Assets/LinkedIn screenshots/bill3.png";
import img4 from "../../Assets/LinkedIn screenshots/bill4.png";
import "./Linkedin.css";
import { Col } from "react-bootstrap";
const Linkedin = (props) => {
  return (
    <div className="Linkedin bg">
      <Col md={6}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Banner />
    </div>
  );
};

export default Linkedin;
