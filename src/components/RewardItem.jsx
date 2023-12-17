import React from "react";
import "../styles/reward-item.scss";
import { getRewardsImage } from "../functions";

const RewardItem = ({ item }) => {
  return (
    <div className="reward-item">
      <img
        // src={baseUrl + `/streamkar/rewards/${pic}.png`}
        src={getRewardsImage(item)}
        className="giftImg"
      />
      <span className="text">{item}</span>
    </div>
  );
};

export default RewardItem;
