import React from "react";
import winLabel from "../assets/images/lucky/win-label.png";
import "../styles/scratch-item.scss";
import NumberWithBg from "./NumberWithBg";
const ScratchWinItem = ({ index, revealedNum }) => {
  return (
    <div className="scratch-win-item image-bg-100 no-repeat">
      <span className="index">{index}</span>
      <div className="revealed-number">
        {revealedNum.split("").map((num) => (
          <NumberWithBg num={num} />
        ))}
      </div>

      <img src={winLabel} className="win-label" />
    </div>
  );
};

export default ScratchWinItem;
