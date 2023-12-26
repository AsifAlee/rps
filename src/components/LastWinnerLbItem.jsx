import React from "react";
import unknown from "../assets/images/common/unknown-user.png";
import battleWonIcon from "../assets/images/battle/battles-won-icon.png";
import {
  getLevelImage,
  getRewardDetails,
  getRewardDetails2,
  getRewardsImage,
  gotoProfile,
} from "../functions";
import "../styles/last-winner-lb-item.scss";

const LastWinnerLbItem = ({ item, index }) => {
  // console.log("rewards desc:", JSON.parse(item?.desc));
  let parsedReward;
  if (item?.desc) {
    parsedReward = JSON.parse(item?.desc);
  }
  return (
    <div className="last-winner-lb-item">
      <div className="leftDiv">
        <div className="index">
          <span>{`Day ${index}`}</span>
        </div>
        <img
          className="user-avatar"
          src={item?.portrait ? item?.portrait : unknown}
          onClick={() => gotoProfile(item?.userId)}
        />

        <div className="user-details">
          <span className="name">{item?.nickname}</span>
          <img src={getLevelImage(item?.userLevel)} />
        </div>
      </div>
      <div className="rightDiv ">
        <div className="rew-item d-flex f-column al-center">
          {parsedReward?.length && (
            <img src={getRewardsImage(parsedReward[0]?.desc)} />
          )}
          {parsedReward?.length && (
            <span>
              {getRewardDetails2(parsedReward[0]?.desc, parsedReward[0]?.count)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LastWinnerLbItem;
