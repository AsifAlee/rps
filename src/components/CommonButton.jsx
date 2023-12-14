import React from "react";
import "../styles/common-button.scss";
const CommonButton = ({ btnImg, isFlipped, width, height }) => {
  return (
    <button
      className={`common-button ${btnImg} ${isFlipped && "flip"}`}
      style={{ width: width && width, height: height && height }}
    ></button>
  );
};

export default CommonButton;
