import React, { useContext, useEffect, useState } from "react";
import giftingTitle from "../../assets/images/event-gifting/title.png";
import rewTitle from "../../assets/images/event-gifting/gifting-reward-title.png";

import "../../styles/event-gifting.scss";
import { gifts, talentRewards, userRewards } from "../../constants";
import Gift from "../../components/Gift";
import TabButton from "../../components/TabButton";
import GiftSlider from "../../components/GiftSlider";
import LeaderBoardComponent from "../../components/LeaderBoardComponent";
import { AppContext } from "../../AppContext";
import { userOverallData } from "../../testData";

const EventGifting = ({ popUpHandler }) => {
  const { giftingLbData } = useContext(AppContext);
  // debugger;
  const [rewTabs, setRewTabs] = useState({
    gifter: true,
    talent: false,
  });

  const toggleRewTabs = (name) => {
    if (name === "gifter") {
      setRewTabs({
        gifter: true,
        talent: false,
      });
    } else {
      setRewTabs({
        gifter: false,
        talent: true,
      });
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="event-gifting-popup">
      <button className="closeBtn" onClick={popUpHandler} />
      <div className="gifting-content">
        <img src={giftingTitle} className="title" />
        <div className="gifts-sec">
          <p className="gift-title golden-text">EVENT GIFTS</p>

          <div className="gifts-container">
            {gifts.map((item) => (
              <Gift item={item} />
            ))}
          </div>
        </div>
        <div className="rewards-sec">
          <img className="rew-title" src={rewTitle} />
          <p>Rewards for Talents and Gifter</p>
          <div className="rew-tabs">
            <TabButton
              handleClick={toggleRewTabs}
              name="talent"
              btnImg={rewTabs.talent ? "talent" : "talent blackNWhite"}
              arrowImage={false}
              showArrowImg={false}
            />
            <TabButton
              handleClick={toggleRewTabs}
              name="gifter"
              btnImg={rewTabs.gifter ? "gifter" : "gifter blackNWhite"}
              arrowImage={false}
              showArrowImg={false}
            />
          </div>
          <div className="slider-cont">
            <GiftSlider
              rewards={rewTabs.talent ? talentRewards : userRewards}
              showTarget={rewTabs.talent ? true : false}
              showIndicators={false}
            />
          </div>
        </div>
      </div>

      <LeaderBoardComponent
        isPopup={true}
        data={[giftingLbData?.talent, giftingLbData?.user]}
        // data={userOverallData}
        isGifting={true}
      />
    </div>
  );
};

export default EventGifting;
