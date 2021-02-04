import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/Laika screenshots/Laika1.png";
import img2 from "../../Assets/Laika screenshots/Laika2.png";
import img3 from "../../Assets/Laika screenshots/laika3.png";
import img4 from "../../Assets/Laika screenshots/Laika4.png";
import img5 from "../../Assets/Laika screenshots/Laika5.png";
import img6 from "../../Assets/Laika screenshots/Laika6.png";
import styles from "./Wearelaika.module.css";
const Wearelaika = (props) => {
  return (
    <div className="Wearelaika bg">
      <Carousel className={styles.carousel}>
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
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img6} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Banner />
    </div>
  );
};

export default Wearelaika;
