import React from "react";
import PopUp from "../../components/Popup";
import bg from "../../assets/images/popup/details-bg.png";
import detailsTitle from "../../assets/images/popup/details-title.png";

import closeBtn from "../../assets/images/event-gifting/cross-btn.png";
import {
  baseUrl,
  battleDetailsRewards,
  luckyDetailsRewards,
} from "../../constants";
import RewardItem from "../../components/RewardItem";
const LuckyDetails = ({ clickHandler }) => {
  return (
    <PopUp bg={bg} details={true}>
      <div className="battle-details">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <img src={detailsTitle} className="title" />
        <div className="details-content">
          <div className="lucky-details-tb-wrap">
            <table>
              <tr className="head">
                <td style={{ width: "5%" }}>Button Name</td>
                <td style={{ width: "5%" }}>Gaming Points Required </td>
                <td style={{ width: "90%" }}>Rewards</td>
              </tr>
              <tr className="reward-row">
                <td>Play</td>
                <td>50,000</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingLeft: "1vw",
                      justifyContent: "space-around",
                      alignContent: "center",
                      gap: "1vw",
                    }}
                  >
                    {luckyDetailsRewards.map((item) => (
                      <RewardItem item={item} luckyDetails={true} />
                    ))}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default LuckyDetails;
