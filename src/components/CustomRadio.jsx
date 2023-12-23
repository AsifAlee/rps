import React, { useState } from "react";
import "../styles/custom-radio.scss";

const RadioButton = ({ options, handleRadioSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {options.map((option, index) => (
        <>
          <div
            onClick={() => {
              handleOptionClick(option);
              handleRadioSelect(option.name);
            }}
            className={`custom-radio-btn ${
              selectedOption === option && "animate-btn"
            }`}
            key={index}
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
