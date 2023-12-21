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

const BattleRecords = ({ clickHandler }) => {
  return (
    <PopUp bg={bg} details={true}>
      <div className="battle-records">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <img src={recordsTitle} className="title" />
        <div className="records-content m-auto">
          <table>
            <tr className="head m-auto">
              <td> Time(GMT)</td>
              <td>Planet </td>
              <td>Rewards Claimed</td>
            </tr>
            <tr className="bat-rec-rows">
              <td>9999999999999999</td>
              <td>Saturn</td>
              <td>
                <LeaderBoardSlider
                  rewards={leaderBoardSliderData}
                  isHistory={true}
                />
              </td>
            </tr>
            <tr>
              <td>9999999999999999</td>
              <td>Saturn</td>
              <td>
                <LeaderBoardSlider
                  rewards={leaderBoardSliderData}
                  isHistory={true}
                />
              </td>
            </tr>
            <tr>
              <td>9999999999999999</td>
              <td>Saturn</td>
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

export default BattleRecords;
