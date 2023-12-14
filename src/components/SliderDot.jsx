import React from "react";
import "../styles/slider.scss";
const SliderDot = ({ isActive }) => {
  return <div className={`slider-dot ${isActive && "active-dot"}`}></div>;
};

export default SliderDot;
