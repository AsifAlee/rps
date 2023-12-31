import React, { useContext, useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../assets/images/battle/left-arrow.png";
import saturn from "../assets/images/tour/saturn.png";
import neptune from "../assets/images/tour/neptune.png";

const TourSlider = ({ rewards, tag, changePlanetIndex, disableSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    changePlanetIndex(currentIndex + 1);
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    changePlanetIndex(currentIndex - 1);
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  return (
    <div className={`tour-slider`}>
      <button
        className={`left-arrow ${disableSlide && "blackNWhite"}`}
        onClick={prevSlide}
        disabled={disableSlide}
      />

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

      <button
        className={`right-arrow flip ${disableSlide && "blackNWhite"}`}
        onClick={nextSlide}
        disabled={disableSlide}
      />
    </div>
  );
};

export default TourSlider;
