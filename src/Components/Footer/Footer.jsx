import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.Footer}>
      <div className="footer text-center">
        <p className={styles.p}>
          Created with ❤ by the
          <a className={styles.a} target="blank" href="https://codepreneurs.brainster.co/">
            Brainster Coding Academy
          </a>
          students and{" "}
          <a className={styles.a} target="blank" href="https://www.wearelaika.com/">
           wearelaika.com
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
