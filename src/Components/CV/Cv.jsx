import React from "react";
import Banner from "../Banner/Banner";
import styles from "./Cv.module.css";
const Cv = (props) => {
  return (
    <div className={styles.cv}>
      This is Cv Componenet
      <Banner />
    </div>
  );
};

export default Cv;
