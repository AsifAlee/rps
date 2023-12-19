import React from "react";
import "../styles/scratch-item.scss";
const ScratchItem = ({ index, revealedNum }) => {
  return (
    <div className="scratch-item image-bg-100 no-repeat">
      <span className="index">{index}</span>
      <span className="revealed-number">{revealedNum}</span>
    </div>
  );
};

export default ScratchItem;
