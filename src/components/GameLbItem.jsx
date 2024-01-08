import React from "react";
import unknown from "../assets/images/common/unknown-user.png";
import battleWonIcon from "../assets/images/battle/battles-won-icon.png";
import bean from "../assets/images/common/bean-icon.png";
import gems from "../assets/images/common/gems.png";
import { getLevelImage, gotoProfile } from "../functions";
import "../styles/game-lb-item.scss";

const GameLeaderboartItem = ({ item, index, isGifting, isTalent }) => {
  const captureImageError = (event) => {
    event.target.src = unknown;
    // return true;
  };
  return (
    <div className="game-board-item">
      <div className="leftDiv">
        <div className="index">
          <span>{`${index + 4}th`}</span>
        </div>
        <img
          className="user-avatar"
          src={item?.portrait ? item?.portrait : unknown}
          onClick={() => gotoProfile(item?.userId)}
          onError={captureImageError}
        />

        <div className="user-details">
          <span className="name">{item?.nickname}</span>
          <img
            src={getLevelImage(
              isTalent ? item?.actorLevel : item?.userLevel,
              isTalent
            )}
            style={{
              width: isTalent ? "7vw" : "",
            }}
          />
        </div>
      </div>
      {isGifting ? (
        <div className="giftingRightDiv">
          <img src={isTalent ? gems : bean} />
          <span>{item?.userScore || 99999}</span>
        </div>
      ) : (
        <div className="rightDiv">
          <img src={battleWonIcon} />
          <span>{item?.userScore || 99999}</span>
        </div>
      )}
    </div>
  );
};

export default GameLeaderboartItem;
