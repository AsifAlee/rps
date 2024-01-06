import React from "react";
import PopUp from "../../components/Popup";
import bg from "../../assets/images/popup/big-bg.png";
import congrats from "../../assets/images/popup/congrats.png";
import oops from "../../assets/images/popup/oops.png";
import cross from "../../assets/images/event-gifting/cross-btn.png";
import ship from "../../assets/images/tour/sapceship-icon.png";
import GameRewardItem from "../../components/GameRewardItem";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const TourGamePopup = ({
  clickHandler,
  errorCode,
  errorMsg,
  rewardData,
  luckyNumber,
}) => {
  const { info } = useContext(AppContext);
  // debugger;
  return (
    <PopUp bg={bg} scratchGame={true}>
      <div className="tour-game-popup">
        <img src={cross} className="closeBtn" onClick={clickHandler} />
        <img src={errorCode === 0 ? congrats : oops} className="title" />
        <div className="rps-content">
          {errorCode === 0 ? (
            <div className="success">
              <p className="p1">
                You've successfully boarded your spaceship{" "}
                <img src={ship} className="battle-icon" />
              </p>

              <div>
                <p
                  style={{ position: "relative", top: "3vw", fontSize: "4vw" }}
                >
                  & have won
                </p>
                <div className="rew-section">
                  <GameRewardItem reward={rewardData} />
                </div>
              </div>

              <p className="bottom-text">
                Enjoy your adventure on this planet and claim your rewards.
              </p>
            </div>
          ) : errorCode === 10000004 ? (
            <div className="enough-points d-flex j-center al-center">
              <div>
                Looks like you need more Tickets{" "}
                <img src={ship} className="battle-icon" /> for this trip! Earn
                more Tickets by collecting event gifts, and you'll be jetting
                off in no time. Keep up the fantastic work!
              </div>
            </div>
          ) : errorCode === 10000002 ? (
            <div className="w-100 h-100 d-flex j-center al-center">
              You need to travel in Neptune planet first.
            </div>
          ) : (
            <div className="w-100 h-100 d-flex j-center al-center">
              {errorMsg}
            </div>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default TourGamePopup;
