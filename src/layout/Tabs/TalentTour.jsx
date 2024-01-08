import React, { useContext, useEffect, useRef, useState } from "react";
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
import { AppContext } from "../../AppContext";
import {
  baseUrl,
  neptuneRewards,
  saturnRewards,
  testToken,
  testUserId,
} from "../../constants";
import TourGamePopup from "../Popups/TourGamePopup";

const TalentTour = () => {
  const {
    info,
    getInfo,
    talentTourLbData,
    geTalentTourLbData,
    user,
    infoCalled,
    getTourRecords,
    handleInfoCalled,

    handleDisableAll,
  } = useContext(AppContext);
  // console.log("info callled:", infoCalled);
  // debugger;
  const divRef = useRef(null);
  const [destination, setDestination] = useState(0);
  const [nepDestination, setNepDestination] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [currentPosNep, setCurrentPosNep] = useState(0);
  const [records, setRecords] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [gameErrCode, setGameErrCode] = useState(null);
  const [gamePopUp, setGamePopUp] = useState(false);
  const [gameMsg, setGameMsg] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [rewardData, setRewardData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState(1);
  const [satReset, setSatReset] = useState(false);
  const [nepREset, setNepReset] = useState(false);

  const {
    talentPoints,
    travelPlanetIndex,
    saturnUnlockRewardInfoList,
    neptuneUnlockRewardInfoList,
  } = info;
  // debugger;
  const toggleRecords = () => {
    setRecords((prevState) => !prevState);
  };
  const talentSliderData = [
    {
      name: "Saturn",
      desc: "Saturn",
    },
    {
      name: "Neptune",
      desc: "Neptune",
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

  // useEffect(() => {
  //   if (selectedPlanet === 1) {
  //     if (saturnUnlockRewardInfoList?.length === 10) {
  //       setCurrentPos(0);
  //     } else {
  //       setCurrentPos(saturnUnlockRewardInfoList?.length);
  //     }
  //   } else if (selectedPlanet === 2) {
  //     if (neptuneUnlockRewardInfoList?.length === 10) {
  //       setCurrentPosNep(0);
  //     } else {
  //       setCurrentPosNep(neptuneUnlockRewardInfoList?.length);
  //     }
  //   }
  // }, [info, saturnUnlockRewardInfoList, neptuneUnlockRewardInfoList]);

  useEffect(() => {
    if (selectedPlanet === 1) {
      setCurrentPos(saturnUnlockRewardInfoList?.length);
    } else if (selectedPlanet === 2) {
      setCurrentPosNep(neptuneUnlockRewardInfoList?.length);
    }
  }, [info, saturnUnlockRewardInfoList, neptuneUnlockRewardInfoList]);

  useEffect(() => {
    if (selectedPlanet === 1) {
      if (saturnUnlockRewardInfoList?.length === 10) {
        setCurrentPos(0);
      } else {
        setCurrentPos(saturnUnlockRewardInfoList?.length);
      }
    } else if (selectedPlanet === 2) {
      if (neptuneUnlockRewardInfoList?.length === 10) {
        setCurrentPosNep(0);
      } else {
        setCurrentPosNep(neptuneUnlockRewardInfoList?.length);
      }
    }
  }, [selectedPlanet]);

  useEffect(() => {
    if (saturnUnlockRewardInfoList?.length === 10) {
      setTimeout(() => {
        setSatReset(true);
        setCurrentPos(0);
      }, 5000);
    } else {
      setSatReset(false);
    }
  }, [saturnUnlockRewardInfoList]);

  useEffect(() => {
    if (neptuneUnlockRewardInfoList?.length === 10) {
      setTimeout(() => {
        setNepReset(true);
        setCurrentPosNep(0);
      }, 5000);
    } else {
      setNepReset(false);
    }
  }, [neptuneUnlockRewardInfoList]);

  const travel = () => {
    setDestination(7);
  };

  const toggleGamePopup = () => {
    handleDisableAll(false);
    setGamePopUp((prevState) => !prevState);
  };

  const changePlanetIndex = (index) => {
    if (selectedPlanet === 2) {
      setSelectedPlanet(1);
    } else {
      setSelectedPlanet(2);
    }
  };
  const playGame = () => {
    handleInfoCalled(false);
    handleDisableAll(true);
    // console.log("selected planet:", selectedPlanet);
    setIsDisabled(true);
    fetch(
      `${baseUrl}/api/activity/rps/talentTour?planetIndex=${selectedPlanet}`,
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
        // debugger;
        if (response.errorCode !== 0) {
          setGameErrCode(response.errorCode);
          setIsPlaying(false);
          setGamePopUp(true);
          setIsDisabled(false);
          setErrorMsg(response?.msg);
          handleInfoCalled(true);
        } else {
          setIsPlaying(true);
          setRewardData(response?.data?.rewardContent);
          if (selectedPlanet === 1) {
            setDestination(currentPos + 1);
          } else if (selectedPlanet === 2) {
            setNepDestination(currentPosNep + 1);
          }

          setGameMsg(response?.msg);
          geTalentTourLbData();
          getTourRecords();

          getInfo();

          setTimeout(() => {
            setIsPlaying(false);
            setGameErrCode(response.errorCode);
            setGamePopUp(true);
            // getInfo();
            setIsDisabled(false);
            handleDisableAll(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.error("Api error:", error.message);
        setIsPlaying(false);
        setGamePopUp(false);
        handleInfoCalled(true);
        setIsDisabled(false);
        handleDisableAll(false);
      });
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
          <span>{`My SpaceShip Tickets : ${talentPoints}`}</span>
        </div>
        <div style={{ position: "relative", top: "9vw" }}>
          <TourSlider
            rewards={talentSliderData}
            changePlanetIndex={changePlanetIndex}
            disableSlide={travelPlanetIndex === 1 || isDisabled}
          />
        </div>
        {selectedPlanet === 1 ? (
          <div className="sat-game-sec">
            <p>1 Spaceship Ticket Required for each Travel</p>
            <div className="game-bg">
              <div className="game-rewards">
                <div className="left-rewards">
                  <div className="reward10">
                    <TourComponent
                      rew={saturnRewards.ten}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 10
                      //     ? true
                      //     : false
                      // }
                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 10
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward8">
                    <TourComponent
                      rew={saturnRewards.eight}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 8
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 8
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward6">
                    <TourComponent
                      rew={saturnRewards.six}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 6
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 6
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward4">
                    <TourComponent
                      rew={saturnRewards.four}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 4
                      //     ? true
                      //     : false
                      // }
                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 4
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward2">
                    <TourComponent
                      rew={saturnRewards.two}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 2
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 2
                          ? true
                          : false
                      }
                    />
                  </div>
                </div>

                <div className="right-rewards">
                  <div className="reward9">
                    <TourComponent
                      rew={saturnRewards.nine}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 9
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 9
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward7">
                    <TourComponent
                      rew={saturnRewards.seven}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 7
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 7
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward5">
                    <TourComponent
                      rew={saturnRewards.five}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 5
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 5
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward3">
                    <TourComponent
                      rew={saturnRewards.three}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 3
                      //     ? true
                      //     : false
                      // }
                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 3
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward1">
                    <TourComponent
                      rew={saturnRewards.one}
                      // isAchieved={
                      //   saturnUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : saturnUnlockRewardInfoList?.length >= 1
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        satReset
                          ? false
                          : saturnUnlockRewardInfoList?.length >= 1
                          ? true
                          : false
                      }
                    />
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

              <div className="bottom-sec">
                <button
                  // className={`travel-btn ${
                  //   isDisabled || !infoCalled ? "blackNWhite" : ""
                  // }`}
                  // onClick={isDisabled || !infoCalled ? () => {} : playGame}
                  // disabled={isPlaying || isDisabled || !infoCalled}
                  className={`travel-btn ${
                    !infoCalled
                      ? "blackNWhite"
                      : isDisabled
                      ? "blackNWhite"
                      : ""
                  }`}
                  onClick={!infoCalled ? () => {} : isDisabled ? {} : playGame}
                  disabled={!infoCalled ? true : isDisabled ? true : false}
                />
                <img
                  className={`moving-ship ${
                    currentPos === 0
                      ? "zeroPos"
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
                  destination === 1 && isPlaying
                    ? "from0To1"
                    : destination === 2 && isPlaying
                    ? "from1To2"
                    : destination === 3 && isPlaying
                    ? "from2To3"
                    : destination === 4 && isPlaying
                    ? "from3To4"
                    : destination === 5 && isPlaying
                    ? "from4To5"
                    : destination === 6 && isPlaying
                    ? "from5To6"
                    : destination === 7 && isPlaying
                    ? "from6To7"
                    : destination === 8 && isPlaying
                    ? "from7To8"
                    : destination === 9 && isPlaying
                    ? "from8To9"
                    : destination === 10 && isPlaying
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
        ) : (
          <div className="nep-game-sec">
            <p>1 Spaceship Ticket Required for each Travel</p>
            <div className="game-bg">
              <div className="game-rewards">
                <div className="left-rewards">
                  <div className="reward10">
                    <TourComponent
                      rew={neptuneRewards.ten}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 10
                      //     ? true
                      //     : false
                      // }
                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 10
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward8">
                    <TourComponent
                      rew={neptuneRewards.eight}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 8
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 8
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward6">
                    <TourComponent
                      rew={neptuneRewards.six}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 6
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 6
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward4">
                    <TourComponent
                      rew={neptuneRewards.four}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 4
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 4
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward2">
                    <TourComponent
                      rew={neptuneRewards.two}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 2
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 2
                          ? true
                          : false
                      }
                    />
                  </div>
                </div>

                <div className="right-rewards">
                  <div className="reward9">
                    <TourComponent
                      rew={neptuneRewards.nine}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 9
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 9
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward7">
                    <TourComponent
                      rew={neptuneRewards.seven}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 7
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 7
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward5">
                    <TourComponent
                      rew={neptuneRewards.five}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 5
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 5
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="reward3">
                    <TourComponent
                      rew={neptuneRewards.three}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 3
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 3
                          ? true
                          : false
                      }
                    />
                  </div>

                  <div className="reward1">
                    <TourComponent
                      rew={neptuneRewards.one}
                      // isAchieved={
                      //   neptuneUnlockRewardInfoList?.length === 10
                      //     ? false
                      //     : neptuneUnlockRewardInfoList?.length >= 1
                      //     ? true
                      //     : false
                      // }

                      isAchieved={
                        nepREset
                          ? false
                          : neptuneUnlockRewardInfoList?.length >= 1
                          ? true
                          : false
                      }
                    />
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

              <div className="bottom-sec">
                <button
                  // className={`travel-btn ${
                  //   isDisabled || infoCalled === false ? "blackNWhite" : ""
                  // }`}

                  // onClick={
                  //   isDisabled || infoCalled === false ? () => {} : playGame
                  // }
                  // disabled={isPlaying || isDisabled || infoCalled === false}

                  className={`travel-btn ${
                    !infoCalled
                      ? "blackNWhite"
                      : isDisabled
                      ? "blackNWhite"
                      : ""
                  }`}
                  onClick={!infoCalled ? () => {} : isDisabled ? {} : playGame}
                  disabled={!infoCalled ? true : isDisabled ? true : false}
                />
                <img
                  className={`moving-ship-nep ${
                    currentPosNep === 0
                      ? "zeroPos"
                      : currentPosNep === 1
                      ? "onePos "
                      : currentPosNep === 2
                      ? "twoPos "
                      : currentPosNep === 3
                      ? "threePos "
                      : currentPosNep === 4
                      ? "fourPos "
                      : currentPosNep === 5
                      ? "fivePos "
                      : currentPosNep === 6
                      ? "sixPos "
                      : currentPosNep === 7
                      ? "sevenPos "
                      : currentPosNep === 8
                      ? "eightPos "
                      : currentPosNep === 9
                      ? "ninePos "
                      : currentPosNep === 10
                      ? "tenPos "
                      : ""
                  }
                      ${
                        nepDestination === 1 && isPlaying
                          ? "nepfrom0To1"
                          : nepDestination === 2 && isPlaying
                          ? "nepfrom1To2"
                          : nepDestination === 3 && isPlaying
                          ? "nepfrom2To3"
                          : nepDestination === 4 && isPlaying
                          ? "nepfrom3To4"
                          : nepDestination === 5 && isPlaying
                          ? "nepfrom4To5"
                          : nepDestination === 6 && isPlaying
                          ? "nepfrom5To6"
                          : nepDestination === 7 && isPlaying
                          ? "nepfrom6To7"
                          : nepDestination === 8 && isPlaying
                          ? "nepfrom7To8"
                          : nepDestination === 9 && isPlaying
                          ? "nepfrom8To9"
                          : nepDestination === 10 && isPlaying
                          ? "nepfrom9To10"
                          : "zeroDes"
                      }
                      
                      
                      
                      `}
                  src={ship}
                />

                <span>START</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="tour-lb">
        <img src={lbTitle} className="title" />
        <div
          className={`lb-restWinners  ${seeMore === false ? "scroll" : ""}`}
          ref={divRef}
        >
          {talentTourLbData?.length ? (
            talentTourLbData?.map((item, index) => (
              <LastWinnerLbItem item={item} index={index + 1} isTalent={true} />
            ))
          ) : (
            <div
              style={{
                position: "relative",
                color: "white",
                fontFamily: "PoppinsMedium",
                position: "relative",
                top: "10vw",
              }}
            >
              No Data Found
            </div>
          )}
        </div>
        {talentTourLbData?.length > 10 ? (
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
      {records && <TalentRecords clickHandler={toggleRecords} />}
      {gamePopUp && (
        <TourGamePopup
          errorCode={gameErrCode}
          errorMsg={errorMsg}
          rewardData={rewardData}
          clickHandler={toggleGamePopup}
        />
      )}
    </div>
  );
};

export default TalentTour;
