import React, { useEffect, useRef, useState } from "react";
import "../../styles/talentTour.scss";
import TourSlider from "../../components/TourSlider";
import shipIcon from "../../assets/images/tour/sapceship-icon.png";
import ship from "../../assets/images/tour/spaceship.png";
import lbTitle from "../../assets/images/tour/lb-title.png";
import LastWinnerLbItem from "../../components/LastWinnerLbItem";
import { userOverallData } from "../../testData";
import CommonButton from "../../components/CommonButton";
import TourComponent from "../../components/TourComponent";
import pathFromRight from "../../assets/images/tour/path1.png";
import pathFromLeft from "../../assets/images/tour/path2.png";
import TalentRecords from "../Popups/TalentRecords";

const TalentTour = () => {
  const divRef = useRef(null);
  const [destination, setDestination] = useState(0);
  const [currentPos, setCurrentPos] = useState(1);
  const [records, setRecords] = useState(false);

  const toggleRecords = () => {
    setRecords((prevState) => !prevState);
  };
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

  const travel = () => {
    setDestination(2);
  };
  return (
    <div className="talent-tours">
      <div className="tour-rec-btn">
        <CommonButton
          btnImg={"records"}
          width={"21vw"}
          handleClick={toggleRecords}
        />
      </div>
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
            <div className="game-rewards">
              <div className="left-rewards">
                <div className="reward10">
                  <TourComponent />
                </div>
                <div className="reward8">
                  <TourComponent />
                </div>
                <div className="reward6">
                  <TourComponent />
                </div>
                <div className="reward4">
                  <TourComponent />
                </div>
                <div className="reward2">
                  <TourComponent />
                </div>
              </div>

              <div className="right-rewards">
                <div className="reward9">
                  <TourComponent />
                </div>

                <div className="reward7">
                  <TourComponent />
                </div>

                <div className="reward5">
                  <TourComponent />
                </div>
                <div className="reward3">
                  <TourComponent />
                </div>

                <div className="reward1">
                  <TourComponent />
                </div>
              </div>

              <img src={pathFromRight} className="path1" />
              <img src={pathFromLeft} className="path2" />
              <img src={pathFromRight} className="path3" />
              <img src={pathFromLeft} className="path4" />
              <img src={pathFromRight} className="path5" />
              <img src={pathFromLeft} className="path6" />
              <img src={pathFromRight} className="path7" />
              <img src={pathFromLeft} className="path8" />
              <img src={pathFromRight} className="path9" />
            </div>

            {/* <div className="reward1">
              <TourComponent />
            </div>
            <div className="reward2">
              <TourComponent />
            </div>
            <div className="reward3">
              <TourComponent />
            </div>
            <div className="reward4">
              <TourComponent />
            </div>
            <div className="reward5">
              <TourComponent />
            </div>
            <div className="reward6">
              <TourComponent />
            </div>
            <div className="reward7">
              <TourComponent />
            </div>
            <div className="reward8">
              <TourComponent />
            </div>
            <div className="reward9">
              <TourComponent />
            </div>
            <div className="reward10">
              <TourComponent />
            </div> */}

            <div className="bottom-sec">
              <button className="travel-btn" onClick={travel} />
              <img
                className={` moving-ship ${
                  currentPos === 0
                    ? ""
                    : currentPos === 1
                    ? "onePos "
                    : currentPos === 2
                    ? "twoPos "
                    : currentPos === 3
                    ? "threePos "
                    : currentPos === 4
                    ? "fourPos "
                    : currentPos === 5
                    ? "fivePos "
                    : currentPos === 6
                    ? "sixPos "
                    : currentPos === 7
                    ? "sevenPos "
                    : currentPos === 8
                    ? "eightPos "
                    : currentPos === 9
                    ? "ninePos "
                    : currentPos === 10
                    ? "tenPos "
                    : ""
                }
                ${
                  destination === 1
                    ? "from0To1"
                    : destination === 2
                    ? "from1To2"
                    : destination === 3
                    ? "from2To3"
                    : destination === 4
                    ? "from3To4"
                    : destination === 5
                    ? "from4To5"
                    : destination === 6
                    ? "from5To6"
                    : destination === 7
                    ? "from6To7"
                    : destination === 8
                    ? "from7To8"
                    : destination === 9
                    ? "from8To9"
                    : destination === 10
                    ? "from9To10"
                    : ""
                }
                
                
                
                `}
                src={ship}
              />
              <span>START</span>
            </div>
          </div>
        </div>
        {/* destination === "from0To1"
                    ? "from0To1"
                    : destination === "from1To2"
                    ? "from1To2"
                    : "" */}
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
      {records && <TalentRecords clickHandler={toggleRecords} />}
    </div>
  );
};

export default TalentTour;
