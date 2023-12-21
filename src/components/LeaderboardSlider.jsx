import React, { useEffect, useRef, useState } from "react";
import "../styles/leaderboard-slider.scss";
import HistorySliderItem from "./HistorySliderItem";
import SliderItem from "./LeaderboardSliderItem";

const LeaderBoardSlider = ({ rewards, isHistory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideInterval = 2000;
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rewards?.length);
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [rewards?.length, slideInterval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      sliderRef?.current?.classList?.remove("sliding");
    };

    sliderRef?.current?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderRef?.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, []);

  return (
    <div className="leaderboard-slider">
      <div
        ref={sliderRef}
        className="slider-wrapper"
        style={{
          transition: "transform 0.5s ease",
          display: "flex",
          position: "relative",
          gap: "1vw",
        }}
      >
        {rewards?.length &&
          rewards[currentIndex]?.map((item, index) => {
            return isHistory ? (
              <HistorySliderItem item={item} key={index} />
            ) : (
              <SliderItem item={item} key={index} />
            );
          })}
      </div>
    </div>
  );
};

export default LeaderBoardSlider;
