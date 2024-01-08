import React from "react";
import "../styles/reward-item.scss";
import { getRewardsImage } from "../functions";

const RewardItem = ({ item, luckyDetails }) => {
  return (
    <div className="reward-item">
      <img
        // src={baseUrl + `/streamkar/rewards/${pic}.png`}
        src={getRewardsImage(item)}
        className="giftImg"
        style={{
          width: luckyDetails && "8vw",
        }}
      />
      <span
        className="text"
        style={{
          fontSize: luckyDetails && "1.5vw",
          width: luckyDetails && "100%",
        }}
      >
        {item}
      </span>
    </div>
  );
};

export default RewardItem;
