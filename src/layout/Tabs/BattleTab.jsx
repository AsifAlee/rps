import React from "react";
import unknown from "../../assets/images/common/unknown-user.png";
import Marquee from "react-fast-marquee";
import { gotoProfile } from "../../functions";
import marqFrame from "../../assets/images/battle/ticker-tape-img-frame.png";
import gameBg from "../../assets/images/battle/game-bg.png";
import gamePoints from "../../assets/images/battle/game-points-icon.png";
import paper from "../../assets/images/battle/paper-icon.png";
import scissor from "../../assets/images/battle/scissors-icon.png";
import rock from "../../assets/images/battle/rock-icon.png";

import "../../styles/battle-tab.scss";
import RadioButton from "../../components/CustomRadio";
import CommonButton from "../../components/CommonButton";
import battleWon from "../../assets/images/battle/battles-won-icon.png";
import playButton from "../../assets/images/battle/play-btn.png";
import RewardsSlider from "../../components/Slider";
import rewardsHeading from "../../assets/images/battle/rewards-heading.png";
import beansPotHeading from "../../assets/images/battle/beand-pot-heading.png";
import potImg from "../../assets/images/battle/beans-pot.png";
import beanIcon from "../../assets/images/battle/bean-icon.png";

const BattleTab = () => {
  const leaderboardRewards = [
    {
      rank: "Top 1st",

      pageRewards: [
        {
          name: "beansbag",
          desc: "50% of beanspot",
        },
      ],
    },
    {
      rank: "Top 2nd",

      pageRewards: [
        {
          name: "beansbag",
          desc: "30% of beanspot",
        },
      ],
    },
    ,
    {
      rank: "Top 3rd",

      pageRewards: [
        {
          name: "beansbag",
          desc: "20% of beanspot",
        },
      ],
    },
  ];
  return (
    <div className="battle-tab">
      {/* <div style={{ position: "absolute", top: "-31vw" }}>
        <Marquee play={true}>
          {["asif", "arif", "atif", "akif", "kashif", "misbah"].map((item) => {
            return (
              <div className="battle-marquee">
                <div className="marquee-item">
                  <div className="marquee-images">
                    <img src={marqFrame} className="marq-frame" />
                    <img
                      src={item.portrait ? item.portrait : unknown}
                      className="marq-user-img"
                      onClick={() => gotoProfile(item?.userId)}
                    />
                  </div>

                  <div className="marq-user-details">
                    <p>
                      <span className="name">{`${item?.slice(
                        0,
                        6
                      )} has won `}</span>
                      have won 1000 battles and ranked 6th in RPS Battle game.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div> */}

      <div className="d-flex j-sb rec-details-btn">
        <CommonButton btnImg={"guide"} width={"21vw"} />
        <CommonButton btnImg={"event-gifting"} width={"27vw"} />
      </div>

      <div className="battle-game-frame">
        <div className="battle-game-points-count d-flex j-center al-center">
          <img src={gamePoints} />
          <span>My Game Points:99999</span>
        </div>
        <div className="battle-game">
          <img src={gameBg} />
        </div>

        <div className="play-btns">
          <RadioButton
            options={[
              { pic: rock, name: "Rock" },
              { pic: paper, name: "Paper" },
              { pic: scissor, name: "Scissor" },
            ]}
          />
        </div>

        <CommonButton btnImg={"playBtn"} />
        <div className="battles-won-count d-flex j-center al-center">
          <img src={battleWon} />
          <span>Battle Won:99999</span>
        </div>
      </div>

      <div className="battle-rewards-sec">
        <img src={rewardsHeading} className="rewards-heading" />
        <div style={{ position: "absolute", top: "7vw", left: "8vw" }}>
          <RewardsSlider
            rewards={leaderboardRewards}
            showRanks={true}
            showIndicators={true}
          />
        </div>

        <div className="beansPot">
          <img src={beansPotHeading} className="beans-pot-heading" />
          <img className="pot-img" src={potImg} />
        </div>

        <div className="beans-pot-count d-flex j-center al-center">
          <img src={beanIcon} />
          <span>99999</span>
        </div>
      </div>
    </div>
  );
};

export default BattleTab;
