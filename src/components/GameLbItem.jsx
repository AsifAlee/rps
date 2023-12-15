import React from "react";
import unknown from "../assets/images/common/unknown-user.png";
import bean from "../assets/images/battle/bean-icon.png";
import battleWonIcon from "../assets/images/battle/battles-won-icon.png";
import { getLevelImage, gotoProfile } from "../functions";
import "../styles/game-lb-item.scss";

const GameLeaderboartItem = ({ item, index }) => {
  return (
    <div className="game-board-item">
      <div className="leftDiv">
        <div className="index">
          <span>{`${index + 4}th`}</span>
        </div>
        <img
          className="user-avatar"
          src={item?.portrait ? item?.portrait : unknown}
          onClick={() => gotoProfile(item.userId)}
        />

        <div className="user-details">
          <span className="name">{item.nickname}</span>
          <img src={getLevelImage(item.userLevel)} />
        </div>
      </div>
      <div className="rightDiv">
        <img src={battleWonIcon} />
        <span>{item?.userScore || 99999}</span>
      </div>
    </div>
  );
};

export default GameLeaderboartItem;
