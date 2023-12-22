import React from "react";
import "../styles/scratch-item.scss";
import NumberWithBg from "./NumberWithBg";
const ScratchItem = ({ index, revealedNum }) => {
  return (
    <div className="scratch-item image-bg-100 no-repeat">
      <span className="index">{index}</span>
      {/* <span className="revealed-number">{revealedNum}</span> */}
      <div className="revealed-number">
        {revealedNum.split("").map((num) => (
          <NumberWithBg num={num} />
        ))}
      </div>
    </div>
  );
};

export default ScratchItem;
