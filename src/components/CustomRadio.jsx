import React, { useState } from "react";
import "../styles/custom-radio.scss";

const RadioButton = ({ options, handleRadioSelect, disabled }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
  };

  return (
    <>
      {options.map((option, index) => (
        <>
          <div
            onClick={() => {
              if (disabled) {
                return;
              }
              handleOptionClick(option);
              handleRadioSelect(option.name);
            }}
            className={`custom-radio-btn ${
              selectedOption === option.name && "animate-btn"
            }`}
            key={index}
            disabled={disabled}
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
