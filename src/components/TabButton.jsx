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
  disabled,
}) => {
  return (
    <>
      <button
        onClick={() => handleClick(name)}
        className={`tab-button ${btnImg}`}
        style={{
          width: width && width,
          height: height && height,
          display: disabled ? "none" : "",
        }}
        // disabled={disabled}
      />
      {showArrowImg && <img src={arrowImage} className="arrowImg" />}
    </>
  );
};

export default TabButton;
