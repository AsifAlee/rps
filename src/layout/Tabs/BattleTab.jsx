import React, { useContext, useEffect, useState } from "react";
import unknown from "../../assets/images/common/unknown-user.png";
import Marquee from "react-fast-marquee";
import { gotoProfile } from "../../functions";
import marqFrame from "../../assets/images/battle/ticker-tape-img-frame.png";
import gameBg from "../../assets/images/battle/game-bg.png";
import gamePoints from "../../assets/images/battle/game-points-icon.png";
import paper from "../../assets/images/battle/paper-icon.png";
import scissor from "../../assets/images/battle/scissors-icon.png";
import rock from "../../assets/images/battle/rock-icon.png";
import rock0 from "../../assets/images/battle/rock0.png";
import rock1 from "../../assets/images/battle/rock1.png";
import rock2 from "../../assets/images/battle/rock2.png";

import paper0 from "../../assets/images/battle/paper0.png";
import paper1 from "../../assets/images/battle/paper1.png";
import paper2 from "../../assets/images/battle/paper2.png";

import scissors0 from "../../assets/images/battle/scissors0.png";
import scissors1 from "../../assets/images/battle/scissors1.png";
import scissors2 from "../../assets/images/battle/scissors2.png";

import "../../styles/battle-tab.scss";
import RadioButton from "../../components/CustomRadio";
import CommonButton from "../../components/CommonButton";
import battleWon from "../../assets/images/battle/battles-won-icon.png";
import playButton from "../../assets/images/battle/play-btn.png";
import rewardsHeading from "../../assets/images/battle/rewards-heading.png";
import beansPotHeading from "../../assets/images/battle/beand-pot-heading.png";
import potImg from "../../assets/images/battle/beans-pot.png";
import beanIcon from "../../assets/images/battle/bean-icon.png";
import LeaderBoardComponent from "../../components/LeaderBoardComponent";
import BattleDetails from "../Popups/BattleDetails";
import RecordsPopup from "../Popups/RecordsPopup";
import Slider from "../../components/Slider";
import BattleRecords from "../Popups/BattleRecords";
import { AppContext } from "../../AppContext";

import {
  baseUrl,
  battleLbRewards,
  testToken,
  testUserId,
  userOverallPot,
} from "../../constants";
import rpsSvga from "../../assets/animations/rpsmovement.svga";
import SvgaPlayer from "../../components/SvgaPlayer";
import RpsGamePopup from "../Popups/RpsGamePopup.";
const BattleTab = () => {
  const {
    info,
    user,
    getInfo,
    getBattleRecords,
    giftingLbData,
    dateStr,
    getBattleLbData,
  } = useContext(AppContext);

  const { battle, battlePrev } = giftingLbData;
  const { potInfo } = info;

  // debugger;
  const [rewards, setRewards] = useState(battleLbRewards);
  const [details, setDetails] = useState(false);
  const [records, setRecords] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [gameErrCode, setGameErrCode] = useState(null);
  const [gamePopUp, setGamePopUp] = useState(false);
  const [gameMsg, setGameMsg] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [rewardData, setRewardData] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [selectedChar, setSelectedChar] = useState("");
  const [rpsResult, setRpsResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [resultImage, setResultImage] = useState("");
  const [animFinished, setAnimFinished] = useState(false);

  const toggleDetails = () => {
    setDetails((prevState) => !prevState);
  };
  const toggleRecords = () => {
    setRecords((prevState) => !prevState);
  };
  useEffect(() => {
    setRewards(battleLbRewards);
  }, []);

  useEffect(() => {
    if (animFinished) {
      if (selectedChar === "R" && rpsResult === 0) {
        console.log("rps 1");
        setResultImage(rock0);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "R" && rpsResult === 1) {
        console.log("rps 2");

        setResultImage(rock1);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "R" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(rock2);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }

      // P
      else if (selectedChar === "P" && rpsResult === 0) {
        console.log("rps 3");

        setResultImage(paper0);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "P" && rpsResult === 1) {
        console.log("rps 3");

        setResultImage(paper1);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "P" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(paper2);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }

      //S
      else if (selectedChar === "S" && rpsResult === 0) {
        console.log("rps 3");

        setResultImage(scissors0);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "S" && rpsResult === 1) {
        console.log("rps 3");

        setResultImage(scissors1);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "S" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(scissors2);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }
    }
  }, [animFinished]);

  const toggleGamepopup = () => {
    setGamePopUp((prevState) => !prevState);
    setResultImage("");
    setAnimFinished(false);
  };

  const handleRadioSelect = (name) => {
    if (name === "Rock") setSelectedChar("R");
    else if (name === "Paper") setSelectedChar("P");
    else setSelectedChar("S");
  };

  const playGame = () => {
    setIsDisabled(true);
    fetch(`${baseUrl}/api/activity/rps/rpsBattle?character=${selectedChar}`, {
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
        let rpsRes;
        // debugger;
        if (response.errorCode !== 0) {
          setGameErrCode(response.errorCode);
          setIsPlaying(false);
          setGamePopUp(true);
          setIsDisabled(false);
          setErrorMsg(response?.msg);
        } else {
          rpsRes = response?.data?.rpsResult;

          setRewardData(response?.data?.rewardContent);
          setIsPlaying(true);
          setGameMsg(response?.msg);
          setTimeout(() => {
            setIsPlaying(false);
            setGameErrCode(response.errorCode);
            // setRpsResult(response?.data?.rpsResult);
            setRpsResult(rpsRes);
            // setGamePopUp(true);
            getInfo();
            getBattleLbData();

            getBattleRecords();
            setIsDisabled(false);
            setAnimFinished(true);
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
    <div className="battle-tab">
      <div style={{ position: "relative", top: "-21vw" }}>
        <Marquee play={true}>
          {battle?.slice(0, 3).map((item) => {
            return (
              <div className="battle-marquee">
                <div className="marquee-item">
                  <div
                    className="marquee-images"
                    onClick={() => gotoProfile(item?.userId)}
                  >
                    <img src={marqFrame} className="marq-frame" />
                    <img
                      src={item.portrait ? item.portrait : unknown}
                      className="marq-user-img"
                    />
                  </div>

                  <div className="marq-user-details">
                    <p>
                      <span className="name">{`${item?.nickname?.slice(
                        0,
                        6
                      )} have won `}</span>
                      {item.userScore}{" "}
                      {`${item.userScore <= 1 ? "battle" : "battles"}`} and
                      ranked{" "}
                      {`${
                        item.ranking === 1
                          ? "1st"
                          : item.ranking === 2
                          ? "2nd"
                          : "3rd"
                      }`}{" "}
                      in RPS Battle game.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      <div className="d-flex j-sb rec-details-btn">
        <CommonButton
          btnImg={"details"}
          width={"21vw"}
          handleClick={toggleDetails}
        />
        <CommonButton
          btnImg={"records"}
          width={"27vw"}
          handleClick={toggleRecords}
        />
      </div>

      <div className="battle-game-frame">
        <div className="battle-game-points-count d-flex j-center al-center">
          <img src={gamePoints} />
          <span>My Game Points : {info?.gamePoints}</span>
        </div>
        <div className="battle-game">
          {/* <img src={gameBg} /> */}
          <SvgaPlayer
            src={rpsSvga}
            start={isPlaying}
            rps={true}
            lucky={resultImage ? true : false}
          />
          {resultImage ? <img src={resultImage} /> : ""}
          {/* <img src={rock0} /> */}
        </div>

        <div className="play-btns">
          <RadioButton
            options={[
              { pic: rock, name: "Rock" },
              { pic: paper, name: "Paper" },
              { pic: scissor, name: "Scissor" },
            ]}
            handleRadioSelect={handleRadioSelect}
            selectedChar={selectedChar}
          />
        </div>
        <button
          className={`play-btn ${isDisabled && "blackNWhite"}`}
          onClick={isDisabled ? () => {} : playGame}
          disabled={isPlaying || isDisabled}
        />
        <span className="points-text">15K Pts Req</span>
        <div className="battles-won-count d-flex j-center al-center">
          <img src={battleWon} />
          <span>Battles Won : {info?.battlesCount}</span>
        </div>
      </div>

      <div className="battle-rewards-sec">
        <img src={rewardsHeading} className="rewards-heading" />
        <div style={{ position: "absolute", top: "7vw", left: "8vw" }}>
          <Slider rewards={rewards} showRanks={true} showIndicators={false} />
        </div>

        <div className="beansPot">
          <img src={beansPotHeading} className="beans-pot-heading" />
          <img className="pot-img" src={potImg} />
        </div>

        <div className="beans-pot-count d-flex j-center al-center">
          <img src={beanIcon} />
          <span>{potInfo[dateStr]}</span>
        </div>
      </div>
      <LeaderBoardComponent data={[battle, battlePrev]} showEstRewards={true} />
      {details && <BattleDetails clickHandler={toggleDetails} />}
      {records && <BattleRecords clickHandler={toggleRecords} />}

      {gamePopUp && (
        <RpsGamePopup
          clickHandler={toggleGamepopup}
          errorCode={gameErrCode}
          rpsResult={rpsResult}
          notSelected={selectedChar === "" ? true : false}
          errorMsg={errorMsg}
          rewardData={rewardData}
        />
      )}
    </div>
  );
};

export default BattleTab;
