import React, { useEffect } from "react";
import "../../styles/info-popup.scss";
import title from "../../assets/images/popup/info-title.png";

const InfoPopUp = ({ clickHandler }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="info-popup">
      <div className="closeBtn" onClick={clickHandler}></div>
      <div className="title-wrap">
        <img src={title} className="title" />
      </div>
      <div className="info-content">
        <div className="step1">
          <div className="step-info">
            <span className="step-tag"> STEP 1:</span>
            <span className="step-desc">Tap on SCRATCH button</span>
          </div>
          <div className="step-bg"></div>
        </div>

        <div className="step2" style={{ marginTop: "4vw" }}>
          <div className="step-info">
            <span className="step-tag"> STEP 2:</span>
            <span className="step-desc">
              Your Lucky Number will be displayed
            </span>
          </div>
          <div className="step-bg"></div>
        </div>

        <div className="step3" style={{ marginTop: "4vw" }}>
          <div className="step-info">
            <span className="step-tag"> STEP 3:</span>
            <span className="step-desc">
              Your Lucky Number will be displayed on "My Lucky Numbers" section
            </span>
          </div>
          <div className="step-bg"></div>
        </div>

        <div className="step4" style={{ marginTop: "4vw" }}>
          <div className="step-info">
            <span className="step-tag"> STEP 4:</span>
            <span className="step-desc">
              The lucky Number will be revealed at 00:00:00 GMT on the Golden
              Card displayed on the webpage.
            </span>
          </div>
          <div className="step-bg"></div>
        </div>
        <p className="last-p">
          The user whose Lucky Number matches with the revealed number on the
          golden card will get{" "}
          <span className="" style={{ fontWeight: "bold", color: "#e7cb69" }}>
            100$
          </span>{" "}
          reward.
        </p>
      </div>
    </div>
  );
};

export default InfoPopUp;
