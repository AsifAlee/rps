import React, { useContext, useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../assets/images/battle/left-arrow.png";

import SliderDot from "./SliderDot";
import { getRewardsImage } from "../functions";

const Slider = ({ rewards, showRanks, hideArrows, showIndicators, tag }) => {
  // debugger;
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

  useEffect(() => {
    intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  // console.log("current index:", currentIndex);
  // console.log("rew length:", rewards);
  return (
    <div className={`slider2`}>
      {!hideArrows && (
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      )}
      <div className="slider-content">
        {showRanks && (
          <div className=" rank-text golden-text">
            {rewards[currentIndex]?.rank}
          </div>
        )}

        <div className="rew-container">
          {rewards[currentIndex]?.pageRewards?.map((singleRew, index) => {
            return (
              <div className="reward-item" key={index}>
                <img
                  src={getRewardsImage(singleRew.name)}
                  className="reward-img"
                />

                <p className="center">{singleRew.desc}</p>
              </div>
            );
          })}
        </div>

        {showIndicators && (
          <div className="indicators">
            {rewards.map((item, index) => (
              <SliderDot isActive={index === currentIndex} />
            ))}
          </div>
        )}
      </div>
      {!hideArrows && (
        <img className="right-arrow flip" src={leftArrow} onClick={nextSlide} />
      )}
    </div>
  );
};

export default Slider;
