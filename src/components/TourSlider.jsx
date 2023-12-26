import React, { useContext, useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../assets/images/battle/left-arrow.png";
import saturn from "../assets/images/tour/saturn.png";
import neptune from "../assets/images/tour/neptune.png";

const TourSlider = ({ rewards, tag, changePlanetIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    changePlanetIndex();
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    changePlanetIndex();
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  return (
    <div className={`tour-slider`}>
      <img className="left-arrow" src={leftArrow} onClick={prevSlide} />

      <div className="slider-content">
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
