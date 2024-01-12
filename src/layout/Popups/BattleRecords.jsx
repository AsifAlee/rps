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
import HistorySliderItem from "../../components/HistorySliderItem";
import SliderItem from "../../components/LeaderboardSliderItem";
import "../../styles/leaderboard-slider.scss";
import RecordRewardItem from "../../components/RecordRewardItem";
import {
  RpsWinLoss,
  getRewardDetails2,
  getRewardsImage,
} from "../../functions";

const BattleRecords = ({ clickHandler }) => {
  const { records } = useContext(AppContext);
  const { rps } = records;
  return (
    <PopUp bg={bg} details={true}>
      <div className="battle-records">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <img src={recordsTitle} className="title" />
        {/* <div className="records-content m-auto">
          <table className="m-auto">
            <tr className="head ">
              <td colSpan={1} style={{ width: "20%" }}>
                {" "}
                Time(GMT)
              </td>
              <td colSpan={1} style={{ width: "10%" }}>
                Planet{" "}
              </td>
              <td colSpan={1} style={{ width: "70%" }}>
                Rewards Claimed
              </td>
            </tr>
            <tr className="bat-rec-rows">
              <td>2023/08/04-08:37AM</td>
              <td>Saturn</td>
              <td>
                <LeaderBoardSlider
                  rewards={leaderBoardSliderData}
                  isHistory={true}
                />
              </td>
            </tr>
          </table>
        </div> */}

        <div className="records-content m-auto">
          {!rps?.length ? (
            <div
              style={{
                position: "relative",
                top: "29vw",
              }}
            >
              No Records Found
            </div>
          ) : (
            <div className="table-wrap">
              <table className="m-auto">
                <tr className="head">
                  <td colSpan={1} style={{ width: "20%" }}>
                    Time
                  </td>
                  <td colSpan={1} style={{ width: "15%" }}>
                    <span style={{ position: "relative", right: "1vw" }}>
                      Element
                    </span>
                  </td>
                  <td colSpan={1} style={{ width: "15%" }}>
                    Result
                  </td>
                  <td colSpan={1} style={{ width: "50%" }}>
                    Rewards
                  </td>
                </tr>
                {rps.map((rec) => {
                  const dateArr = new Date(rec?.time)
                    ?.toLocaleString()
                    ?.split(",");
                  return (
                    <tr className="bat-rec-rows">
                      <td style={{ fontWeight: "bold" }}>
                        {
                          <div>
                            <p style={{ fontSize: "2.5vw" }}>{dateArr[0]}</p>
                            <p style={{ fontSize: "2.5vw" }}>{dateArr[1]}</p>
                          </div>
                        }
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        {rec?.score >= 20 && rec?.score <= 22
                          ? "Rock"
                          : rec?.score >= 30 && rec?.score <= 32
                          ? "Paper"
                          : rec?.score >= 10 && rec?.score <= 12
                          ? "Scissor"
                          : ""}
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        {RpsWinLoss(rec?.score)}
                      </td>
                      <td>
                        <div
                          style={{ flexWrap: "wrap", gap: "1vw" }}
                          className="d-flex j-center al-center"
                        >
                          {/* <RecordRewardItem item={rec?.rewardDTOList[0]} /> */}
                          {rec?.rewardDTOList?.map((rew) => (
                            <div className="battle-rec-item">
                              <img src={getRewardsImage(rew?.desc)} />
                              <span>
                                {getRewardDetails2(rew?.desc, rew?.count)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default BattleRecords;
