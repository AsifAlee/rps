import React from "react";
import { getRewardsImage } from "../functions";
import "../styles/gifting.scss";
const GameRewardItem = ({ reward }) => {
  return (
    <div className="game-reward-item">
      <img className="reward-img" src={getRewardsImage(reward)} />

      <p className="text">{reward}</p>
    </div>
  );
};

export default GameRewardItem;
