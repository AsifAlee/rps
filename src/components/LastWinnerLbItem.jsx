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
import { lastLuckyWinnerRewards } from "../constants";
import HistorySliderItem from "./HistorySliderItem";

const LastWinnerLbItem = ({ item, index, isLucky, isTalent }) => {
  // console.log("rewards desc:", JSON.parse(item?.desc));
  let parsedReward;
  if (item?.desc) {
    parsedReward = JSON.parse(item?.desc);
  }
  return (
    <div className="last-winner-lb-item">
      <div className="leftDiv">
        <div className="index">
          {isLucky ? <span>{`Day ${item?.day}`}</span> : <span>{index}</span>}
        </div>
        <img
          className="user-avatar"
          src={item?.portrait ? item?.portrait : unknown}
          onClick={() => gotoProfile(item?.userId)}
        />

        <div className="user-details">
          <span className="name">{item?.nickname}</span>
          <img
            src={getLevelImage(
              isTalent ? item?.actorLevel : item?.userLevel,
              isTalent
            )}
            style={{ width: isTalent && "7vw" }}
          />
        </div>
      </div>
      <div className="rightDiv " style={{ right: isLucky ? "4vw" : "" }}>
        {!isLucky ? (
          <div className="rew-item d-flex f-column al-center">
            {parsedReward?.length && (
              <img src={getRewardsImage(parsedReward[0]?.desc)} />
            )}
            {parsedReward?.length && (
              <span className="span-text">{`${getRewardDetails2(
                parsedReward[0]?.desc,
                parsedReward[0]?.count
              )}`}</span>
            )}
          </div>
        ) : (
          lastLuckyWinnerRewards.map((item) => (
            <div
              className="d-flex f-column rew-item j-center al-center"
              // style={{ width: "10vw" }}
            >
              <img style={{ width: "7vw" }} src={getRewardsImage(item.name)} />
              <span style={{ fontSize: "1.5vw" }}>{item.count}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LastWinnerLbItem;
