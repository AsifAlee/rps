import React from "react";
import PopUp from "../../components/Popup";
import bg from "../../assets/images/popup/big-bg.png";

import tie from "../../assets/images/popup/tie.png";
import victory from "../../assets/images/popup/victory.png";

import unlucky from "../../assets/images/popup/unlucky.png";
import congrats from "../../assets/images/popup/congrats.png";
import element from "../../assets/images/popup/element.png";
import oops from "../../assets/images/popup/oops.png";
import cross from "../../assets/images/event-gifting/cross-btn.png";
import battleIcon from "../../assets/images/battle/battles-won-icon.png";
import rock from "../../assets/images/battle/rock-icon.png";
import paper from "../../assets/images/battle/paper-icon.png";
import scissor from "../../assets/images/battle/scissors-icon.png";
import gameIcon from "../../assets/images/battle/game-points-icon.png";

import RewardItem from "../../components/RewardItem";
import GameRewardItem from "../../components/GameRewardItem";

const RpsGamePopup = ({
  clickHandler,
  errorCode,
  notSelected,
  errorMsg,
  rpsResult,
  rewardData,
}) => {
  // debugger;
  return (
    <PopUp bg={bg} game={true}>
      <div className="rps-game-popup">
        <img src={cross} className="closeBtn" onClick={clickHandler} />
        <img
          src={
            errorCode === 0
              ? rpsResult === 0
                ? oops
                : rpsResult === 2
                ? tie
                : congrats
              : errorCode === 10000004
              ? oops
              : notSelected === true
              ? element
              : oops
          }
          className="title"
        />
        <div className="rps-content">
          {errorCode === 0 ? (
            <div className="success">
              {rpsResult === 1 ? (
                <div className="p1">
                  Congratulations! You have successfully won this battle
                  <img src={battleIcon} className="battle-icon" />& your reward
                  is
                </div>
              ) : rpsResult === 2 ? (
                <p className="p1">
                  Better luck next time, here’s a reward for your effort
                </p>
              ) : (
                <p className="p1">
                  It looks like you have lost this battle
                  <img src={battleIcon} className="battle-icon" />, here’s a
                  reward for your effort
                </p>
              )}

              <div className="rew-section">
                <GameRewardItem reward={rewardData} />
              </div>
              <p className="bottom-text">
                Play again to win more amazing rewards.
              </p>
            </div>
          ) : errorCode === 10000004 ? (
            <div className="enough-points d-flex j-center al-center">
              <div>
                You don’t have enough Game Points <img src={gameIcon} /> to play
                right now, send more event gifts to gain Game Points. Come back
                again to play.
              </div>
            </div>
          ) : notSelected ? (
            <div className="not-selected d-flex j-center al-center">
              <div>
                You have to select rock <img src={rock} />, paper{" "}
                <img src={paper} /> or scissors <img src={scissor} /> first, in
                order to Play.
              </div>
            </div>
          ) : (
            <div className="w-100 h-100 d-flex j-center al-center">
              {errorMsg}
            </div>
          )}

          {/* {errorCode === 0 && <div className="rps-content">
            
            </div>} */}
        </div>
      </div>
    </PopUp>
  );
};

export default RpsGamePopup;
