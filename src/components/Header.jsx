import React, { useContext, useState } from "react";
import "../styles/header.scss";
import { AppContext } from "../AppContext";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  // const [showGuide, setShowGuide] = useState(false);
  const { selectedLng, changeLanguage } = useContext(AppContext);

  // const toggleGuide = () => {
  //   setShowGuide((prevState) => !prevState);
  // };
  return (
    <div className="header">
      {/* <button className="guide-btn" onClick={toggleGuide}></button> */}
      <LanguageDropdown
        selectedLanguage={selectedLng}
        changeLanguage={changeLanguage}
      />
      {/* {showGuide && <Guide popUpHandeler={toggleGuide} />} */}
    </div>
  );
};

export default Header;
