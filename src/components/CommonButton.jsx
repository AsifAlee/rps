import React from "react";
import "../styles/common-button.scss";
const CommonButton = ({
  btnImg,
  isFlipped,
  width,
  height,
  seeMore,
  handleClick,
}) => {
  return (
    <button
      className={`common-button ${btnImg} ${isFlipped && "flip"}`}
      style={{ width: width && width, height: height && height }}
      // onClick={seeMore ? handleClick : null}
      onClick={handleClick}
    ></button>
  );
};

export default CommonButton;
