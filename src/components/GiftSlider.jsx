import React, { useEffect, useState } from "react";
import leftArrow from "../assets/images/battle/left-arrow.png";
import { getRewardsImage } from "../functions";
import "../styles/slider.scss";

const GiftSlider = ({ rewards }) => {
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
  console.log("current index:", currentIndex);
  return (
    <div className={`gift-slider`}>
      <div className="arrowsNRank">
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
        <span className="rank">TOP 1ST</span>
        <img className="right-arrow flip" src={leftArrow} onClick={nextSlide} />
      </div>

      <div className="rews-content">
        <p className="target-text">
          Talent Target:{rewards[currentIndex]?.target}
        </p>

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
      {/* {!hideArrows && (
        <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      )}
      <div className="slider-content">
        {showRanks && (
          <div style={{ fontSize: "3vw" }}>{rewards[currentIndex]?.rank}</div>
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
      )} */}
    </div>
  );
};

export default GiftSlider;
