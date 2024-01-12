import React from "react";
import { getRewardsImage } from "../functions";
import "../styles/gifting.scss";
const GameRewardItemMul = ({ reward }) => {
  return (
    <div>
      <div className="game-reward-item-mul">
        <img className="reward-img" src={getRewardsImage(reward)} />
      </div>
      <p className="text">{reward}</p>
    </div>
  );
};

export default GameRewardItemMul;
