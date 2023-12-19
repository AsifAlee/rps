import React from "react";
import winLabel from "../assets/images/lucky/win-label.png";
import "../styles/scratch-item.scss";
const ScratchWinItem = ({ index, revealedNum }) => {
  return (
    <div className="scratch-win-item image-bg-100 no-repeat">
      <span className="index">{index}</span>
      <span className="revealed-number">{revealedNum}</span>
      <img src={winLabel} className="win-label" />
    </div>
  );
};

export default ScratchWinItem;
