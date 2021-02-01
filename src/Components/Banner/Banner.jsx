import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="FooterBanner">
      <div className="brainster">
        <p>Do you want to learn hands-on digital skills? </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://brainster.co/"
        >
          VISIT BRAINSTER
        </a>
      </div>
      <div className="Laika">
        <p>Do you want to learn hands-on digital skills? </p>
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
