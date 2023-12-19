import React, { useContext, useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../assets/images/battle/left-arrow.png";
import saturn from "../assets/images/tour/saturn.png";
import neptune from "../assets/images/tour/neptune.png";

import { getRewardsImage } from "../functions";

const TourSlider = ({ rewards, tag }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  // useEffect(() => {
  //   intervalId = setInterval(nextSlide, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [rewards]);
  console.log("current index:", currentIndex);
  return (
    <div className={`tour-slider`}>
      <img className="left-arrow" src={leftArrow} onClick={prevSlide} />

      <div className="slider-content">
        {/* {showRanks && (
          <div style={{ fontSize: "3vw" }}>{rewards[currentIndex]?.rank}</div>
        )} */}

        <div className="rew-container">
          <div className="reward-item">
            <img
              src={rewards[currentIndex].name === "Neptune" ? neptune : saturn}
              className="reward-image"
            />

            <p className="center">{rewards[currentIndex].name}</p>
          </div>
        </div>
        <span>{tag}</span>
      </div>

      <img className="right-arrow flip" src={leftArrow} onClick={nextSlide} />
    </div>
  );
};

export default TourSlider;
