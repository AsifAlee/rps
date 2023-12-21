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
          <table>
            <tr className="head m-auto">
              <td colSpan={1} style={{ width: "30%" }}>
                {" "}
                Time(GMT)
              </td>
              <td colSpan={1} style={{ width: "15%" }}>
                Element{" "}
              </td>
              <td colSpan={1} style={{ width: "15%" }}>
                Result
              </td>
              <td colSpan={1} style={{ width: "40%" }}>
                Rewards
              </td>
            </tr>
            <tr className="tal-rec-row">
              <td>2023/08/04-08:37AM</td>
              <td>Saturn</td>
              <td>Won</td>
              <td>
                <LeaderBoardSlider
                  rewards={leaderBoardSliderData}
                  isHistory={true}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </PopUp>
  );
};

export default TalentRecords;
