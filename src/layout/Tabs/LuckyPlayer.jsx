import React, { useContext, useEffect, useRef, useState } from "react";
import gamePoints from "../../assets/images/battle/game-points-counter-bar.png";
import beanIcon from "../../assets/images/common/bean-icon.png";
// import infoBtn from "../../assets/images/lucky/in";
import cards from "../../assets/images/lucky/cards.png";
import "../../styles/lucky-player.scss";
import CommonButton from "../../components/CommonButton";
import infoBtn from "../../assets/images/lucky/info-btn.png";
import luckyTitle from "../../assets/images/lucky/lucky number title.png";
import specialRewards from "../../assets/images/lucky/special-rewards-title.png";
import { AppContext } from "../../AppContext";
import { getRewardsImage } from "../../functions";
import TabButton from "../../components/TabButton";
import ScratchItem from "../../components/ScratchItem";
import ScratchWinItem from "../../components/ScratchWinItem";
import lastLuckyWinner from "../../assets/images/lucky/last-lucky-winner-title.png";
import loadingMascot from "../../assets/images/lucky/loading-mascot.png";
import LastWinnerLbItem from "../../components/LastWinnerLbItem";
import { userOverallData } from "../../testData";
import LuckyDetails from "../Popups/LuckyDetails";
import InfoPopUp from "../Popups/InfoPopUp";

const LuckyPlayer = () => {
  const { info } = useContext(AppContext);
  const divRef = useRef(null);
  const [details, setDetails] = useState(false);
  const [luckyInfo, setLuckyInfo] = useState(false);

  const { isScrtached } = info;
  const [lbTabs, setLbTabs] = useState({
    today: true,
    prev: false,
  });
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const toggleInfo = () => {
    debugger;
    setLuckyInfo((prevState) => !prevState);
  };

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };
  const toggleDetails = () => {
    setDetails((prevState) => !prevState);
  };

  useEffect(() => {
    if (seeMore === true) {
      scrollToTop();
    }
  }, [seeMore]);
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
  return (
    <div className="lucky-player">
      <div className="player-details-btn">
        <CommonButton
          btnImg={"details"}
          width={"21vw"}
          handleClick={toggleDetails}
        />
      </div>
      <div className="lucky-game-frame">
        <div className="lucky-game-points-count d-flex j-center al-center">
          <img src={gamePoints} />
          <span>My Game Points:99999</span>
        </div>

        <div className="lucky-info d-flex j-center al-center">
          <p>
            Only 1 lucky winner will get
            <img src={beanIcon} />
            <span>100$</span> reward.First 200 users will get free scratch for
            the first time of the day,Hurry up!
          </p>
        </div>

        <div className="info-btn">
          <img src={infoBtn} onClick={toggleInfo} />
        </div>

        <div className="lucky-game">
          <img src={cards} />
        </div>
        <div
          style={{
            position: "relative",
            top: "39vw",
            color: "white",
            fontSize: "3vw",
          }}
        >
          <CommonButton btnImg={"scratch"} />
          <p>50k game points required</p>
        </div>
        <div className="scratch-rem d-flex j-center al-center">
          {/* <img src={battleWon} /> */}
          <span>Daily Scratch Remaining:99999</span>
        </div>
      </div>
      <div
        className="my-lucky-numbers-wrap"
        style={{ minHeight: isScrtached ? "480vw" : "260vw" }}
      >
        <img src={luckyTitle} className="title" />

        {isScrtached === false ? (
          <div className="not-scratched">
            <img src={loadingMascot} />
            <p style={{ color: "white" }}>
              Scratch Cards tog get your lucky Number
            </p>
          </div>
        ) : (
          <div
            className="scratched"
            style={{ position: "absolute", top: "10vw", right: 0, left: 0 }}
          >
            <div className="tabs d-flex j-center">
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
            <div className="numbers-container">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return index != 6 ? (
                  <ScratchItem index={item} revealedNum={"a56yx"} />
                ) : (
                  <ScratchWinItem index={item} revealedNum={"a56yx"} />
                );
              })}
            </div>
          </div>
        )}

        <div
          className="rest-divs"
          style={{ top: isScrtached ? "173vw" : "70vw" }}
        >
          <div className="special-rewards">
            <img src={specialRewards} className="title" />

            <div className="rewards-div d-flex j-sa al-center">
              <div className="reward-item">
                <img src={getRewardsImage("beansbag")} />
                <span>100$ Beans</span>
              </div>
              <div className="reward-item">
                <img src={getRewardsImage("Follower Card")} />
                <span>Followers Card x1 day</span>
              </div>
              <div className="reward-item">
                <img src={getRewardsImage("Fortune room skin")} />
                <span>Fortune room skin (New) x 2 days</span>
              </div>
            </div>
          </div>
          <div className="lucky-numbers-appear-wrap">
            <div className="tabs d-flex j-center">
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

            <div className="lucky-number-appear">
              <p>The Lucky Number will be revealed at 00:00:00 GMT</p>
              <div className="scratch-bg d-flex j-center al-center">
                <span>??????</span>
              </div>
            </div>

            <div
              className={`last-lucky-winners image-bg-100 no-repeat d-flex j-center al-center f-column ${
                isScrtached && "last-winner-scratched"
              }`}
              style={{}}
            >
              {isScrtached === false ? (
                <>
                  <img className="title" src={lastLuckyWinner} />
                  <img src={loadingMascot} className="mascot-img" />
                  <p>Lucky winner will be announed at 00:00:00 GMT</p>
                </>
              ) : (
                <>
                  <div
                    className={`last-lucky-rest-wins  ${
                      seeMore === false ? "scroll" : ""
                    }`}
                    ref={divRef}
                  >
                    <img src={lastLuckyWinner} className="title" />

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                      (item, index) => (
                        <LastWinnerLbItem
                          item={userOverallData[0]}
                          index={index + 1}
                        />
                      )
                    )}
                  </div>
                  <div className="seeMore">
                    <CommonButton
                      btnImg={seeMore ? "see-more" : "see-less"}
                      seeMore={true}
                      handleClick={toggleSeeMore}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {details && <LuckyDetails clickHandler={toggleDetails} />}
      {luckyInfo && <InfoPopUp />}
    </div>
  );
};

export default LuckyPlayer;
