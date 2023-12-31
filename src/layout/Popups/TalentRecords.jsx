import React, { useContext } from "react";
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
import { AppContext } from "../../AppContext";
import RecordRewardItem from "../../components/RecordRewardItem";

const TalentRecords = ({ clickHandler }) => {
  const { records } = useContext(AppContext);
  const { tour } = records;
  return (
    <PopUp bg={bg} details={true}>
      <div className="talent-records">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <img src={recordsTitle} className="title" />

        <div className="records-content m-auto">
          {tour?.length === 0 ? (
            <div>No Records Found</div>
          ) : (
            <table className="m-auto">
              <tr className="head ">
                <td colSpan={1} style={{ width: "40%" }}>
                  {" "}
                  Time(GMT)
                </td>
                <td colSpan={1} style={{ width: "20%" }}>
                  Planet{" "}
                </td>
                <td colSpan={1} style={{ width: "30%" }}>
                  Rewards Claimed
                </td>
              </tr>
              {tour?.map((record) => (
                <tr className="tal-rec-rows">
                  <td>{record?.time}</td>
                  <td>Saturn</td>
                  <td>
                    {/* <div
                      style={{ position: "relative", top: "-6vw", left: "4vw" }}
                    >
                      <LeaderBoardSlider
                        rewards={leaderBoardSliderData}
                        isHistory={true}
                      />
                    </div> */}
                    <div
                      style={{ position: "relative", top: "-3vw" }}
                      className="d-flex j-center al-center"
                    >
                      {/* <LeaderBoardSlider
                          rewards={leaderBoardSliderData}
                          isHistory={true}
                        /> */}
                      {/* <HistorySliderItem item={rec?.rewardDTOList[0]} /> */}
                      <RecordRewardItem item={record?.rewardDTOList[0]} />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default TalentRecords;
