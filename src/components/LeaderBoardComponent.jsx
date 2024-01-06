import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/leaderboardcomp.scss";
import title from "../assets/images/battle/lb-title.png";
import TabButton from "./TabButton";
import Topper from "./Topper";
import { userOverallData } from "../testData";
import GameLeaderboartItem from "./GameLbItem";
import CommonButton from "./CommonButton";
import { userOverallPot } from "../constants";
import { AppContext } from "../AppContext";
const LeaderBoardComponent = ({ isPopup, data, isGifting, showEstRewards }) => {
  // debugger;

  const [selectedData, setSelectedData] = useState(data[0]);

  const [lbTabs, setLbTabs] = useState({
    today: true,
    prev: false,
  });

  const [giftingLbTabs, setGiftingLbTabs] = useState({
    talent: true,
    user: false,
  });
  const [seeMore, setSeeMore] = useState(true);
  const divRef = useRef(null);

  const toggleTabs = (name) => {
    if (name === "today") {
      setLbTabs({
        today: true,
        prev: false,
      });
    } else {
      setLbTabs({
        today: false,
        prev: true,
      });
    }
  };

  const toggleGiftingTabs = (name) => {
    if (name === "talent") {
      setGiftingLbTabs({
        talent: true,
        user: false,
      });
    } else {
      setGiftingLbTabs({
        talent: false,
        user: true,
      });
    }
  };

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

  useEffect(() => {
    if (!isGifting) {
      if (lbTabs.today) {
        setSelectedData(data[0]);
      } else {
        setSelectedData(data[1]);
      }
    } else {
      if (giftingLbTabs.talent) {
        setSelectedData(data[0]);
      } else {
        setSelectedData(data[1]);
      }
    }
  }, [lbTabs, data, giftingLbTabs]);

  return (
    <div
      className="leaderboard-comp  "
      style={{
        width: isPopup && "95%",
        marginLeft: isPopup && "auto",
        marginRight: isPopup && "auto",
      }}
    >
      <img src={title} className="lb-title" />
      {isGifting ? (
        <div className="lb-tabs m-auto">
          <TabButton
            handleClick={toggleGiftingTabs}
            name="talent"
            btnImg={giftingLbTabs.talent ? "talent" : "talent blackNWhite"}
            arrowImage={false}
            showArrowImg={false}
          />
          <TabButton
            handleClick={toggleGiftingTabs}
            name="gifter"
            btnImg={giftingLbTabs.user ? "gifter" : "gifter blackNWhite"}
            arrowImage={false}
            showArrowImg={false}
          />
        </div>
      ) : (
        <div className="lb-tabs m-auto">
          <TabButton
            handleClick={toggleTabs}
            name="today"
            btnImg={lbTabs.today ? "today-sel" : "today-sel blackNWhite"}
            arrowImage={false}
            showArrowImg={false}
          />
          <TabButton
            handleClick={toggleTabs}
            name="prev"
            btnImg={lbTabs.prev ? "prev-sel" : "prev-sel blackNWhite"}
            arrowImage={false}
            showArrowImg={false}
          />
        </div>
      )}

      {!selectedData?.length ? (
        <div
          style={{
            position: "relative",
            top: "42vw",
            color: "white",
            fontFamily: "PoppinsMedium",
          }}
        >
          No Data Found
        </div>
      ) : (
        <>
          {isGifting ? (
            <>
              <div className="topper-sec">
                <div className="pos1">
                  {selectedData[0] && (
                    <Topper
                      user={selectedData[0]}
                      index={1}
                      isGifting={isGifting}
                      isTalent={giftingLbTabs.user ? false : true}
                      showEstRewards={showEstRewards}
                    />
                  )}
                </div>

                <div className="pos2">
                  {selectedData[1] && (
                    <Topper
                      user={selectedData[1]}
                      index={2}
                      isGifting={isGifting}
                      isTalent={giftingLbTabs.user ? false : true}
                      showEstRewards={showEstRewards}
                    />
                  )}
                </div>

                <div className="pos3">
                  {selectedData[2] && (
                    <Topper
                      user={selectedData[2]}
                      index={3}
                      isGifting={isGifting}
                      isTalent={giftingLbTabs.user ? false : true}
                      showEstRewards={showEstRewards}
                    />
                  )}
                </div>
              </div>
              <div
                className={`rest-winners ${seeMore === false ? "scroll" : ""}`}
                ref={divRef}
              >
                {selectedData?.slice(3).map((item, index) => (
                  <GameLeaderboartItem
                    index={index}
                    item={item}
                    isTalent={giftingLbTabs.user ? false : true}
                    isGifting={isGifting}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="topper-sec">
                <div className="pos1" style={{ left: !isGifting && "35vw" }}>
                  {selectedData[0] && (
                    <Topper
                      user={selectedData[0]}
                      index={1}
                      isGifting={isGifting}
                      isTalent={false}
                      showEstRewards={showEstRewards}
                      isPrev={lbTabs.prev}
                    />
                  )}
                </div>

                <div className="pos2">
                  {selectedData[1] && (
                    <Topper
                      user={selectedData[1]}
                      index={2}
                      isGifting={isGifting}
                      isTalent={false}
                      showEstRewards={showEstRewards}
                      isPrev={lbTabs.prev}
                    />
                  )}
                </div>

                <div className="pos3">
                  {selectedData[2] && (
                    <Topper
                      user={selectedData[2]}
                      index={3}
                      isGifting={isGifting}
                      isTalent={false}
                      showEstRewards={showEstRewards}
                      isPrev={lbTabs.prev}
                    />
                  )}
                </div>
              </div>
              <div
                className={`rest-winners ${seeMore === false ? "scroll" : ""}`}
                ref={divRef}
              >
                {selectedData?.slice(3).map((item, index) => (
                  <GameLeaderboartItem
                    index={index}
                    item={item}
                    isTalent={false}
                    isGifting={isGifting}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
      {selectedData?.length > 10 ? (
        <div className="seeMore">
          <CommonButton
            btnImg={seeMore ? "see-more" : "see-less"}
            seeMore={true}
            handleClick={toggleSeeMore}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LeaderBoardComponent;
