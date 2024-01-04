import React, { useEffect, useState } from "react";
import leftArrow from "../assets/images/battle/left-arrow.png";
import { getRewardsImage } from "../functions";
import "../styles/slider.scss";
import SliderDot from "./SliderDot";

const GiftSlider = ({ rewards, showTarget, showIndicators }) => {
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

  useEffect(() => {
    setCurrentIndex(0);
  }, [rewards]);
  // console.log("current index:", currentIndex);
  return (
    <div className={`gift-slider`}>
      <div className="arrowsNRank">
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
        <span className="golden-text rank">{`TOP ${rewards[currentIndex].rank}`}</span>
        <img className="right-arrow flip" src={leftArrow} onClick={nextSlide} />
      </div>

      <div className="rews-content">
        {showTarget ? (
          <p className="target-text">
            Talent Target:{rewards[currentIndex]?.target}
          </p>
        ) : (
          ""
        )}

        {rewards[currentIndex]?.pageRewards?.map((singleRew, index) => {
          return (
            <div className="reward-item" key={index}>
              <img
                src={getRewardsImage(singleRew.name)}
                className="reward-img"
              />

              <p className="center gift-rew-desc">{singleRew.desc}</p>
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
  );
};

export default GiftSlider;
