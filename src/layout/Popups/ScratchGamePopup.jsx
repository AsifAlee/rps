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
import NumberWithBg from "../../components/NumberWithBg";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ScratchGamePopup = ({
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
      <div className="scratch-game-popup">
        <img src={cross} className="closeBtn" onClick={clickHandler} />
        <img src={errorCode === 0 ? congrats : oops} className="title" />
        <div className="rps-content">
          {errorCode === 0 ? (
            <div className="success">
              <p className="p1">
                You have successfully scratched your card & your lucky number is
              </p>
              <div className="lucky-numbers">
                {luckyNumber?.split("")?.map((item) => (
                  <NumberWithBg num={item} />
                ))}
              </div>
              {info.gamePoints ? (
                <div>
                  <p style={{ position: "relative", top: "3vw" }}>
                    You have won
                  </p>
                  <div className="rew-section">
                    <GameRewardItem reward={rewardData} />
                  </div>
                </div>
              ) : (
                ""
              )}

              <p className="bottom-text">
                The Lucky winner will be announced at: 00:00:00 GMT.
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

export default ScratchGamePopup;