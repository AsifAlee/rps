import React from "react";
import "../styles/gift.scss";
import { getRewardsImage } from "../functions";
const Gift = ({ item }) => {
  return (
    <div className="gift">
      <img
        // src={baseUrl + `/streamkar/rewards/${pic}.png`}
        src={getRewardsImage(item.desc)}
        className="giftImg"
      />
      <span className="text">{item.name}</span>
    </div>
  );
};

export default Gift;
