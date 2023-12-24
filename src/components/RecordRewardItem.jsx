import React, { useContext } from "react";
import { getRewardDetails, getRewardsImage } from "../functions";
import "../styles/record-reward-item.scss";

const RecordRewardItem = ({ item, index }) => {
  return (
    <div className="record-rewards-item">
      <div className="img-with-bg">
        <img src={getRewardsImage(item?.desc)} />
      </div>
      <span>{getRewardDetails(item?.desc, item?.count)}</span>
    </div>
  );
};

export default RecordRewardItem;
