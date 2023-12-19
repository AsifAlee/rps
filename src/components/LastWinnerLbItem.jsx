import React from "react";
import unknown from "../assets/images/common/unknown-user.png";
import battleWonIcon from "../assets/images/battle/battles-won-icon.png";
import { getLevelImage, gotoProfile } from "../functions";
import "../styles/last-winner-lb-item.scss";

const LastWinnerLbItem = ({ item, index }) => {
  return (
    <div className="last-winner-lb-item">
      <div className="leftDiv">
        <div className="index">
          <span>{`Day ${index + 1}`}</span>
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
      <div className="rightDiv ">
        <div className="rew-item d-flex f-column al-center">
          <img src={battleWonIcon} />
          <span>{item?.userScore || "12 days"}</span>
        </div>
      </div>
    </div>
  );
};

export default LastWinnerLbItem;
