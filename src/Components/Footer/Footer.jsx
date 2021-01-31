import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.Footer}>
      <div className="footer text-center">
        <p>
          Created with by the{" "}
          <a target="blank" href="https://www.w3schools.com">
            Brainster Coding Academy
          </a>
          students and{" "}
          <a target="blank" href="https://www.w3schools.com">
            WEARELAIKA.COM
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
