import React from "react";
import PopUp from "../../components/Popup";
import bg from "../../assets/images/popup/records-bg.png";
import recordsTitle from "../../assets/images/popup/records-title.png";

import closeBtn from "../../assets/images/event-gifting/cross-btn.png";
import {
  baseUrl,
  battleDetailsRewards,
  leaderBoardSliderData,
} from "../../constants";
import RewardItem from "../../components/RewardItem";
import LeaderBoardSlider from "../../components/LeaderboardSlider";

const TalentRecords = ({ clickHandler }) => {
  return (
    <PopUp bg={bg} details={true}>
      <div className="talent-records">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <img src={recordsTitle} className="title" />

        <div className="records-content m-auto">
          <table className="m-auto">
            <tr className="head ">
              <td colSpan={1} style={{ width: "25%" }}>
                {" "}
                Time(GMT)
              </td>
              <td colSpan={1} style={{ width: "20%" }}>
                Planet{" "}
              </td>
              <td colSpan={1} style={{ width: "55%" }}>
                Rewards Claimed
              </td>
            </tr>
            <tr className="tal-rec-rows">
              <td>2023/08/04-08:37AM</td>
              <td>Saturn</td>
              <td>
                <div style={{ position: "relative", top: "-6vw", left: "4vw" }}>
                  <LeaderBoardSlider
                    rewards={leaderBoardSliderData}
                    isHistory={true}
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </PopUp>
  );
};

export default TalentRecords;
