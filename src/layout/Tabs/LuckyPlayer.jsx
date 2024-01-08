import React, { useContext, useEffect, useRef, useState } from "react";
import gamePoints from "../../assets/images/battle/game-points-icon.png";
import beanIcon from "../../assets/images/common/bean-icon.png";
// import infoBtn from "../../assets/images/lucky/in";
// import cards from "../../assets/images/lucky/cards.png";
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
import lastLuckyWinnerTitle from "../../assets/images/lucky/last-lucky-winner-title.png";
import loadingMascot from "../../assets/images/lucky/loading-mascot.png";
import LastWinnerLbItem from "../../components/LastWinnerLbItem";
import { userOverallData } from "../../testData";
import LuckyDetails from "../Popups/LuckyDetails";
import InfoPopUp from "../Popups/InfoPopUp";
import { baseUrl, testToken, testUserId } from "../../constants";
import ScratchGamePopup from "../Popups/ScratchGamePopup";
import scratchSvga from "../../assets/animations/scratch-gold.svga";
import starsSvga from "../../assets/animations/rps-ticket-stars.svga";

import SvgaPlayer from "../../components/SvgaPlayer";
import scratchWinText from "../../assets/images/lucky/scratch-win-text.png";
import StarsSvga from "../../components/StarsSvga";
const LuckyPlayer = () => {
  const {
    info,
    getInfo,
    getScratchRecords,
    lastLuckyWinners,
    user,
    getLastLuckyWinners,
  } = useContext(AppContext);
  // debugger;
  const divRef = useRef(null);

  const [details, setDetails] = useState(false);
  const [luckyInfo, setLuckyInfo] = useState(false);
  const [isScrtached, setIsScratched] = useState(false);
  const [scratchingFinished, setScratchingFinished] = useState(false);
  let a = 2;

  const {
    dailyScratchRemaining,
    lastLuckyCard,
    todayLuckyTickets,
    yestLuckyTickets,
  } = info;
  // debugger;
  const [lbTabs, setLbTabs] = useState({
    today: true,
    prev: false,
  });

  const [numberTabs, setNumberTabs] = useState({
    today: true,
    prev: false,
  });

  const [seeMore, setSeeMore] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);
  const [gameErrCode, setGameErrCode] = useState(null);
  const [gamePopUp, setGamePopUp] = useState(false);
  const [gameMsg, setGameMsg] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [rewardData, setRewardData] = useState("");
  const [rewardsList, setRewardsList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [currentLuckyTickets, setCurrentLuckyTickets] = useState([]);

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };
  const toggleInfo = () => {
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

  const toggleGamepopup = () => {
    setGamePopUp((prevState) => !prevState);
  };
  useEffect(() => {
    if (seeMore === true) {
      scrollToTop();
    }
  }, [seeMore]);
  const toggleNumberTabs = (name) => {
    if (name === "today") {
      setNumberTabs({
        today: true,
        prev: false,
      });
    } else {
      setNumberTabs({
        today: false,
        prev: true,
      });
    }
  };

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

  useEffect(() => {
    if (numberTabs.today) setCurrentLuckyTickets(todayLuckyTickets);
    else setCurrentLuckyTickets(yestLuckyTickets);
  }, [numberTabs, yestLuckyTickets, todayLuckyTickets]);

  useEffect(() => {
    if (todayLuckyTickets?.length || yestLuckyTickets?.length) {
      setIsScratched(true);
    }
  }, [info, todayLuckyTickets, yestLuckyTickets]);

  const playGame = () => {
    setIsDisabled(true);

    fetch(`${baseUrl}/api/activity/rps/luckyTicket`, {
      method: "POST",
      headers: {
        userId: user.userId,
        token: user.token,
        // userId: testUserId,
        // token: testToken,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        setLuckyNumber("");
        if (response.errorCode !== 0) {
          setGameErrCode(response.errorCode);
          setIsPlaying(false);
          setGamePopUp(true);
          setIsDisabled(false);
          setErrorMsg(response?.msg);
        } else {
          setRewardData(response?.data?.rewardContent);
          setRewardsList(response?.data?.rewardDTOList);
          setIsPlaying(true);
          setGameMsg(response?.msg);
          setLuckyNumber(response?.data?.luckyCard);

          // setScratchingFinished(true);
          setTimeout(() => {
            setIsPlaying(false);
            setGameErrCode(response.errorCode);
            setGamePopUp(true);
            getInfo();
            getScratchRecords();
            getLastLuckyWinners();
            setIsDisabled(false);
          }, 3300);
        }
      })
      .catch((error) => {
        console.error("Api error:", error.message);
        setIsPlaying(false);
        setGamePopUp(false);
      });
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
          <span>My Game Points : {info?.gamePoints}</span>
        </div>

        <div className="lucky-info d-flex j-center al-center">
          <p>
            Only 1 lucky winner will get &nbsp;
            <img src={beanIcon} />
            <span className="golden-text" style={{ fontSize: "3.7vw" }}>
              100$
            </span>{" "}
            reward. First 200 users will get free scratch for the first time of
            the day, Hurry up!
          </p>
        </div>

        <div className="info-btn">
          <img src={infoBtn} onClick={toggleInfo} />
        </div>

        <div className="lucky-game">
          <div
            className="d-flex j-center al-center"
            style={{ position: "relative", top: "40vw", color: "white" }}
          >
            <SvgaPlayer start={isPlaying} src={scratchSvga} lucky={true} />
            {!luckyNumber ? (
              <img src={scratchWinText} />
            ) : (
              <span className="lucky-text">{luckyNumber}</span>
            )}
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: "43vw",
            color: "white",
            fontSize: "3vw",
          }}
        >
          <button
            className={`play-btn ${
              (isDisabled || !dailyScratchRemaining) && "blackNWhite"
            }`}
            onClick={isDisabled || !dailyScratchRemaining ? () => {} : playGame}
            disabled={isPlaying || isDisabled || !dailyScratchRemaining}
          />
          <p>50k game points required</p>
        </div>
        <div
          className={`scratch-rem d-flex j-center al-center ${
            !dailyScratchRemaining && "blackNWhite"
          }`}
        >
          <span>Daily Scratch Remaining:{dailyScratchRemaining}</span>
        </div>
      </div>
      <div className="my-lucky-numbers-wrap">
        <img src={luckyTitle} className="main-title" />

        {isScrtached === false ? (
          <div className="not-scratched">
            <img src={loadingMascot} />
            <p style={{ color: "white" }}>
              Scratch Cards to get your lucky Number
            </p>
          </div>
        ) : (
          <div className="scratched">
            <div className="tabs d-flex j-center">
              <TabButton
                handleClick={toggleNumberTabs}
                name="today"
                btnImg={
                  numberTabs.today ? "today-sel" : "today-sel blackNWhite"
                }
                arrowImage={false}
                showArrowImg={false}
              />

              <TabButton
                handleClick={toggleNumberTabs}
                name="prev"
                btnImg={numberTabs.prev ? "prev-sel" : "prev-sel blackNWhite"}
                arrowImage={false}
                showArrowImg={false}
              />
            </div>
            <div className="numbers-container">
              {currentLuckyTickets?.length ? (
                currentLuckyTickets?.map((item, index) => {
                  return item !== lastLuckyCard ? (
                    <ScratchItem index={index + 1} revealedNum={item} />
                  ) : (
                    <ScratchWinItem index={index + 1} revealedNum={item} />
                  );
                })
              ) : (
                <div
                  style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: "4vw",
                    color: "white",
                    position: "relative",
                    top: "3vw",
                  }}
                >
                  No Data Found
                </div>
              )}
            </div>
          </div>
        )}

        <div className="special-rewards">
          <img src={specialRewards} className="spec-title" />

          <div
            className="rewards-div d-flex j-sa al-center"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <div className="reward-item">
              <img src={getRewardsImage("beansbag")} />
              <span>100$ Beans</span>
            </div>
            <div className="reward-item">
              <img src={getRewardsImage("Followers Card")} />
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
              btnImg={
                lbTabs.prev && lastLuckyCard
                  ? "prev-sel"
                  : "prev-sel blackNWhite"
              }
              arrowImage={false}
              showArrowImg={false}
              disabled={!lastLuckyCard ? true : false}
            />
          </div>

          <div className="lucky-number-appear">
            {lbTabs.today ? (
              <>
                <p>The Lucky Number will be revealed at 00:00:00 GMT</p>
                <div className="scratch-bg d-flex j-center al-center">
                  <span style={{ fontSize: "7vw" }}>?????</span>
                </div>
              </>
            ) : (
              <>
                <p>Last Lucky Number revealed</p>
                <div className="scratch-bg d-flex j-center al-center">
                  <span style={{ fontSize: "7vw" }}>{lastLuckyCard}</span>
                  <StarsSvga src={starsSvga} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`last-lucky-winners image-bg-100 no-repeat d-flex j-center al-center f-column 
        }`}
      >
        <img className="title" src={lastLuckyWinnerTitle} />
        {!lastLuckyWinners.length ? (
          <div className="no-winners">
            <img src={loadingMascot} className="mascot-img" />
            <p>Lucky winner will be announed at 00:00:00 GMT</p>
          </div>
        ) : (
          <>
            <div
              className={`last-lucky-rest-wins  ${
                seeMore === false ? "scroll" : ""
              }`}
              ref={divRef}
            >
              {/* <img src={lastLuckyWinnerTitle} className="title" /> */}

              {!lastLuckyWinners?.length ? (
                <div>No Data Found</div>
              ) : (
                lastLuckyWinners
                  .sort((a, b) => a.day - b.day)
                  ?.map((item, index) => (
                    <LastWinnerLbItem
                      item={item}
                      index={index + 1}
                      isLucky={true}
                    />
                  ))
              )}
            </div>
            {lastLuckyWinners?.length > 10 ? (
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
          </>
        )}
      </div>
      {details && <LuckyDetails clickHandler={toggleDetails} />}
      {luckyInfo && <InfoPopUp clickHandler={toggleInfo} />}

      {gamePopUp && (
        <ScratchGamePopup
          clickHandler={toggleGamepopup}
          errorCode={gameErrCode}
          errorMsg={errorMsg}
          rewardData={rewardData}
          luckyNumber={luckyNumber}
          rewardsList={rewardsList}
        />
      )}
      {/* <ScratchGamePopup
        clickHandler={toggleGamepopup}
        errorCode={0}
        errorMsg={errorMsg}
        rewardData={""}
        rewardsList={rewardsList}
        luckyNumber={"12345"}
      /> */}
    </div>
  );
};

export default LuckyPlayer;
