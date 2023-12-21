import React, { useContext } from "react";
import { getRewardDetails, getRewardsImage } from "../functions";

const HistorySliderItem = ({ item, index }) => {
  return (
    <div className="history-slider-item">
      <div className="img-with-bg">
        <img src={getRewardsImage(item.desc)} />
      </div>
      <span>{getRewardDetails(item.desc, item.count)}</span>
    </div>
  );
};

export default HistorySliderItem;
