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
          <table>
            <tr className="head">
              <td colSpan={1} style={{ width: "10%" }}>
                Button Name
              </td>
              <td colSpan={1} style={{ width: "10%" }}>
                Gaming Points Required{" "}
              </td>
              <td colSpan={1} style={{ width: "80%" }}>
                Rewards
              </td>
            </tr>
            <tr className="reward-row">
              <td>Play</td>
              <td>50,000</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5vw",
                    paddingLeft: "1vw",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  {luckyDetailsRewards.map((item) => (
                    <RewardItem item={item} />
                  ))}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </PopUp>
  );
};

export default LuckyDetails;
