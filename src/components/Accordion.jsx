import React, { useState } from "react";
import arrow from "../assets/images/guide/down-arrow.png";
import "../styles/accordion.scss";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);
  const { children, headerTxt } = props;

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <div
          className={`accordion-title ${
            headerTxt === 1
              ? "rps"
              : headerTxt === 2
              ? "lucky-player"
              : "talent-tour"
          }`}
        >
          <img src={arrow} className={isOpen ? "down-arrow" : "right-arrow"} />
        </div>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
}

export default Accordion;
