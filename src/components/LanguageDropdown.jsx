import React, { useState } from "react";
import "../styles/dropdown.scss";

const LanguageDropdown = (props) => {
  const { selectedLanguage, changeLanguage } = props;

  const [isOpen, setIsOpen] = useState(false);
  const languageOptions = ["Hindi/Hinglish", "English"];

  const handleLanguageChange = (index) => {
    changeLanguage(index);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleDropdown} className="dropDownWrap">
      <div className={`dropdown-box ${isOpen ? "open" : ""}`}>
        <div className="selected-language">
          {languageOptions[selectedLanguage]}
        </div>
        <svg className="dropdown-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {languageOptions.map((language, index) => (
            <div
              key={language}
              className="dropdown-item"
              onClick={() => handleLanguageChange(index)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
