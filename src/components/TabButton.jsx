import React from "react";
import "../styles/tab-button.scss";
const TabButton = ({
  btnImg,
  handleClick,
  name,
  arrowImage,
  showArrowImg,
  width,
  height,
}) => {
  return (
    <div>
      <button
        onClick={() => handleClick(name)}
        className={`tab-button ${btnImg}`}
        style={{ width: width && width, height: height && height }}
      />
      {showArrowImg && <img src={arrowImage} className="arrowImg" />}
    </div>
  );
};

export default TabButton;
