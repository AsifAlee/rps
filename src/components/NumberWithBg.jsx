import React from "react";
import "../styles/number-with-bg.css";
const NumberWithBg = ({ num }) => {
  return (
    <div className="number-with-bg">
      <span>{num}</span>
    </div>
  );
};

export default NumberWithBg;
