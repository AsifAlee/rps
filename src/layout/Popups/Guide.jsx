import React from "react";
import PopUp from "../../components/Popup";
import closeBtn from "../../assets/images/event-gifting/cross-btn.png";
import bg from "../../assets/images/guide/bg.png";
import Gift from "../../components/Gift";
import { gifts } from "../../constants";
import Accordion from "../../components/Accordion";

const Guide = ({ clickHandler = () => {} }) => {
  return (
    <PopUp bg={bg} isGuide={true}>
      <div className="guide-popup">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <div className="guide-content">
          <div className="guide-gifts">
            <p className="gift-title"> GIFTS</p>

            <div className="gifts-container">
              {gifts.map((item) => (
                <Gift item={item} />
              ))}
            </div>
          </div>
          <div className="howToPlaySec">
            <p className="howTitle"> HOW TO PLAY?</p>
            <div className="acc-section">
              <div style={{}}>
                <Accordion headerTxt={1}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you send event gifts, you will get Game Points. 1
                        bean of event gift = 1 Game Point.
                      </li>
                      <li>
                        In this part of the event, you will be able to “Scratch”
                        only 10 Lucky Cards daily, and at the end of the day 1
                        (random user) Lucky winner will be announced and will
                        get 3 special rewards.
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div style={{ position: "relative", top: "-7vw" }}>
                <Accordion headerTxt={2}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you send event gifts, you will get Game Points. 1
                        bean of event gift = 1 Game Point.
                      </li>
                      <li>
                        In this part of the event, you will be able to “Scratch”
                        only 10 Lucky Cards daily, and at the end of the day 1
                        (random user) Lucky winner will be announced and will
                        get 3 special rewards.
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div>
                <Accordion headerTxt={3}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you send event gifts, you will get Game Points. 1
                        bean of event gift = 1 Game Point.
                      </li>
                      <li>
                        In this part of the event, you will be able to “Scratch”
                        only 10 Lucky Cards daily, and at the end of the day 1
                        (random user) Lucky winner will be announced and will
                        get 3 special rewards.
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default Guide;
