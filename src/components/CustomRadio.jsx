import React, { useState } from "react";
import "../styles/custom-radio.css";

const RadioButton = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <div
            onClick={() => handleOptionClick(option)}
            style={
              {
                //   backgroundColor: selectedOption === option ? "#ddd" : "#fff",
              }
            }
            className={`custom-radio-btn ${
              selectedOption === option && "animate-btn"
            }`}
          >
            <img src={option.pic} />
            <span>{option.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default RadioButton;
