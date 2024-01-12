import React, { useContext, useEffect, useState } from "react";
import unknown from "../../assets/images/common/unknown-user.png";
import Marquee from "react-fast-marquee";
import { gotoProfile } from "../../functions";
import marqFrame from "../../assets/images/battle/ticker-tape-img-frame.png";
import gamePoints from "../../assets/images/battle/game-points-icon.png";
import paper from "../../assets/images/battle/paper-icon.png";
import scissor from "../../assets/images/battle/scissors-icon.png";
import rock from "../../assets/images/battle/rock-icon.png";
import rockWin from "../../assets/images/battle/rockWin.png";
import rockTie from "../../assets/images/battle/rockTie.png";
import rockLost from "../../assets/images/battle/rockLost.png";

import paperWin from "../../assets/images/battle/paperWin.png";
import paperLost from "../../assets/images/battle/paperLost.png";
import paperTie from "../../assets/images/battle/papertie.png";

import scissorsWin from "../../assets/images/battle/scissorsWin.png";
import scissorsLost from "../../assets/images/battle/scissorsLost.png";
import scissorsTie from "../../assets/images/battle/scissorsTie.png";

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
// import RecordsPopup from "../Popups/RecordsPopup";
import Slider from "../../components/Slider";
import BattleRecords from "../Popups/BattleRecords";
import { AppContext } from "../../AppContext";
import mascot from "../../assets/images/battle/game-mascot.png";

import {
  baseUrl,
  battleLbRewards,
  testToken,
  testUserId,
  userOverallPot,
} from "../../constants";
import rpsSvga from "../../assets/animations/rpsmovement.svga";
import SvgaPlayer from "../../components/SvgaPlayer";
import RpsGamePopup from "../Popups/RpsGamePopup..jsx";
import mascotDp from "../../assets/images/battle/mascot-dp.png";
import vsGif from "../../assets/images/battle/vs-anim.gif";
import userFrame from "../../assets/images/battle/userFrame.png";
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
  // debugger;

  const { battle, battlePrev } = giftingLbData;
  const { potInfo, avatar } = info;

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
  const [isInputZero, setIsInputZero] = useState(false);

  const [winCount, setWinCount] = useState(0);
  const [lostCount, setLostCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

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
        setResultImage(rockLost);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "R" && rpsResult === 1) {
        console.log("rps 2");

        setResultImage(rockWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "R" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(rockTie);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }

      // P
      else if (selectedChar === "P" && rpsResult === 0) {
        console.log("rps 3");

        setResultImage(paperLost);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "P" && rpsResult === 1) {
        console.log("rps 3");

        setResultImage(paperWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "P" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(paperTie);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }

      //S
      else if (selectedChar === "S" && rpsResult === 0) {
        console.log("rps 3");

        setResultImage(scissorsLost);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "S" && rpsResult === 1) {
        console.log("rps 3");

        setResultImage(scissorsWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "S" && rpsResult === 2) {
        console.log("rps 3");

        setResultImage(scissorsTie);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "R") {
        setResultImage(rockWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "P") {
        setResultImage(paperWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      } else if (selectedChar === "S") {
        setResultImage(scissorsWin);
        setTimeout(() => {
          setGamePopUp(true);
        }, 3300);
      }
    }
  }, [animFinished]);

  const toggleGamepopup = () => {
    setGamePopUp((prevState) => !prevState);
    // setResultImage("");
    setAnimFinished(false);
    setIsDisabled(false);
    setIsPlaying(false);
    setInputValue(1);
  };

  const handleRadioSelect = (name) => {
    if (name === "Rock") {
      setSelectedChar("R");
      setResultImage(rockTie);
    } else if (name === "Paper") {
      setSelectedChar("P");
      setResultImage(paperWin);
    } else {
      setSelectedChar("S");
      setResultImage(scissorsLost);
    }
  };

  const playGame = () => {
    if (selectedChar === "") {
      setGamePopUp(true);
      return;
    }
    setIsDisabled(true);
    setResultImage("");

    {
      inputValue <= 1
        ? fetch(
            `${baseUrl}/api/activity/rps/rpsBattle?character=${selectedChar}`,
            {
              method: "POST",
              headers: {
                userId: user.userId,
                token: user.token,
                // userId: testUserId,
                // token: testToken,
                "Content-Type": "application/json",
              },
            }
          )
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
                  // setIsPlaying(false);
                  // setIsDisabled(false);
                  setGameErrCode(response.errorCode);
                  setRpsResult(rpsRes);
                  // setGamePopUp(true);
                  getInfo();
                  getBattleLbData();

                  getBattleRecords();

                  setAnimFinished(true);
                }, 3300);
              }
            })
            .catch((error) => {
              console.error("Api error:", error.message);
              setIsPlaying(false);
              setGamePopUp(false);
            })
        : fetch(
            `${baseUrl}/api/activity/rps/rpsBattleMultiple?playCount=${inputValue}`,
            {
              method: "POST",
              headers: {
                userId: user.userId,
                token: user.token,
                // userId: testUserId,
                // token: testToken,
                "Content-Type": "application/json",
              },
            }
          )
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
                // setInputValue(1);
              } else {
                // rpsRes = response?.data?.rpsResult;

                setRewardData(response?.data?.rewardContent);
                setIsPlaying(true);
                setGameMsg(response?.msg);
                setWinCount(response?.data?.winCount);
                setLostCount(response?.data?.lostCount);
                setTieCount(response?.data?.tieCount);

                setTimeout(() => {
                  // setIsPlaying(false);
                  // setIsDisabled(false);
                  setGameErrCode(response.errorCode);
                  // setRpsResult(rpsRes);
                  // setGamePopUp(true);
                  getInfo();
                  getBattleLbData();

                  getBattleRecords();

                  setAnimFinished(true);
                  // setInputValue(1);
                }, 3300);
              }
            })
            .catch((error) => {
              console.error("Api error:", error.message);
              setIsPlaying(false);
              setGamePopUp(false);
              // setInputValue(1);
            });
    }
  };

  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      // let max = info?.gamePoints < 99 ?  userInfo.throwsLeft : 99;
      if (info?.gamePoints <= 99 && info?.gamePoints > 0) {
        max = info?.gamePoints;
      } else if (info?.gamePoints > 99) {
        max = 99;
      } else if (info?.gamePoints === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };
  const onChangeHandle = (event) => {
    if (!event.target.value) {
      setIsInputZero(true);
    } else {
      setIsInputZero(false);
    }
    setInputValue(parseInt(event.target.value));
  };

  return (
    <div className="battle-tab">
      <div style={{ position: "absolute", top: "-21vw", width: "100%" }}>
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
          <div className="meVsOpp">
            <div className="mascot-withFrame">
              <img src={userFrame} className="mascotFrame" />
              <img src={mascotDp} className="mascot-dp" />
            </div>

            <img src={vsGif} className="vsGif" />
            <div className="user-withFrame">
              <img src={userFrame} className="userFrame" />
              <img src={avatar ? avatar : unknown} className="user-dp" />
            </div>
          </div>
          <SvgaPlayer
            src={rpsSvga}
            start={isPlaying}
            rps={true}
            lucky={resultImage ? true : false}
            animFinished={animFinished}
          />
          {resultImage ? <img src={resultImage} className="result-img" /> : ""}

          <img src={mascot} className="mascot-img" />
          <div id="extraContent"></div>
        </div>

        <div className="play-btns">
          <RadioButton
            options={[
              { pic: rock, name: "Rock" },
              { pic: paper, name: "Paper" },
              { pic: scissor, name: "Scissor" },
            ]}
            handleRadioSelect={
              isPlaying || isDisabled ? () => {} : handleRadioSelect
            }
            selectedChar={selectedChar}
            disabled={isPlaying || isDisabled}
          />
        </div>
        <div className="input-sec">
          <input
            className="battle-input"
            type="number"
            value={inputValue}
            min={1}
            max={99}
            onChange={onChangeHandle}
            onKeyUp={onUpCheck}
            pattern="[0-9]*"
            style={{ border: isInputZero ? "1px solid red" : "" }}
          />
          <span className="input-info">Max value = 99</span>
        </div>
        <button
          className={`play-btn ${
            isDisabled ? "blackNWhite" : !inputValue ? "blackNWhite" : ""
          }`}
          onClick={isDisabled || isPlaying || !inputValue ? () => {} : playGame}
          disabled={isPlaying || isDisabled}
        />
        <span className="points-text">15K Pts Req</span>
        <div
          className="battles-won-count d-flex j-center al-center"
          style={{ filter: !info?.battlesCount ? "grayScale(1)" : "" }}
        >
          <img src={battleWon} />
          <span>Battles Won : {info?.battlesCount}</span>
        </div>
      </div>

      <div className="battle-rewards-sec">
        <img src={rewardsHeading} className="rewards-heading" />
        <div style={{ position: "absolute", top: "7vw", left: "8vw" }}>
          <Slider rewards={rewards} showRanks={true} showIndicators={true} />
        </div>

        <div className="beansPot">
          <img src={beansPotHeading} className="beans-pot-heading" />
          <img className="pot-img" src={potImg} />
        </div>

        <div className="beans-pot-count d-flex j-center al-center">
          <img src={beanIcon} />
          {/* {dateStr && Object.keys(potInfo) ? (
            <span>{potInfo[dateStr]}</span>
          ) : (
            ""
          )} */}

          {dateStr && potInfo && Object.keys(potInfo) ? (
            <span>{potInfo[dateStr]}</span>
          ) : (
            ""
          )}
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
          isMultiple={inputValue > 1}
          winCount={winCount}
          lostCount={lostCount}
          tieCount={tieCount}
        />
      )}
    </div>
  );
};

export default BattleTab;
