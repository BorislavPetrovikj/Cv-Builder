import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.FooterBanner}>
      <div className={styles.brainster}>
        <p>Do you want to learn hands-on digital skills? </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://brainster.co/"
        >
          VISIT BRAINSTER
        </a>
      </div>
      <div className={styles.Laika}>
        <p>Do you want to job offers by IT companies? </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wearelaika.com/"
        >
          VISIT LAIKA
        </a>
      </div>
    </div>
  );
};

export default Banner;
