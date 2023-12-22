import React, { useState } from "react";
import "../styles/custom-radio.scss";

const RadioButton = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {options.map((option, index) => (
        <>
          <div
            onClick={() => handleOptionClick(option)}
            className={`custom-radio-btn ${
              selectedOption === option && "animate-btn"
            }`}
          >
            <img src={option.pic} className="radio-img" />
            <span>{option.name}</span>
          </div>
        </>
      ))}
    </>
  );
};

export default RadioButton;
