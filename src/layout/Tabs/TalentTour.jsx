import React, { useEffect, useRef, useState } from "react";
import "../../styles/talentTour.scss";
import TourSlider from "../../components/TourSlider";
import shipIcon from "../../assets/images/tour/sapceship-icon.png";
import ship from "../../assets/images/tour/spaceship.png";
import lbTitle from "../../assets/images/tour/lb-title.png";
import LastWinnerLbItem from "../../components/LastWinnerLbItem";
import { userOverallData } from "../../testData";
import CommonButton from "../../components/CommonButton";

const TalentTour = () => {
  const divRef = useRef(null);

  const talentSliderData = [
    {
      name: "Neptune",
      desc: "Neptune",
    },
    {
      name: "Saturn",
      desc: "Saturn",
    },
  ];

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (seeMore === true) {
      scrollToTop();
    }
  }, [seeMore]);
  return (
    <div className="talent-tours">
      <div className="space-game">
        <div className="space-ticket-count d-flex j-center al-center">
          <img src={shipIcon} />
          <span>{`My Spaceship tickets:99999`}</span>
        </div>
        <div style={{ position: "relative", top: "9vw" }}>
          <TourSlider rewards={talentSliderData} />
        </div>
        <div className="game-sec">
          <p>1 Spaceship Ticket Required for each Travel</p>
          <div className="game-bg">
            <div className="bottom-sec">
              <button className="travel-btn" />
              <img className="ship-image" src={ship} />
            </div>
          </div>
        </div>
      </div>
      <div className="tour-lb">
        <img src={lbTitle} className="title" />
        <div
          className={`lb-restWinners  ${seeMore === false ? "scroll" : ""}`}
          ref={divRef}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
            <LastWinnerLbItem item={userOverallData[0]} index={index + 1} />
          ))}
        </div>
        <div className="seeMore">
          <CommonButton
            btnImg={seeMore ? "see-more" : "see-less"}
            seeMore={true}
            handleClick={toggleSeeMore}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentTour;
