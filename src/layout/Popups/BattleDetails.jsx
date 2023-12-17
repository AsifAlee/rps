import React from "react";
import PopUp from "../../components/Popup";
import bg from "../../assets/images/battle/lb-bg.png";
import closeBtn from "../../assets/images/common/close-btn.png";
import { baseUrl, battleDetailsRewards } from "../../constants";
import RewardItem from "../../components/RewardItem";
const BattleDetails = ({ clickHandler }) => {
  return (
    <PopUp bg={bg} details={true}>
      <div className="battle-details">
        <img src={closeBtn} className="closeBtn" onClick={clickHandler} />
        <div className="details-content">
          <table>
            <tr className="head">
              <th>Button Name</th>
              <th>Gaming Points Required </th>
              <th>Rewards</th>
            </tr>
            <tr className="reward-row">
              <td>Play</td>
              <td>15,000</td>
              <td rowSpan={3}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5vw",
                    paddingLeft: "1vw",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {battleDetailsRewards.map((item) => (
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

export default BattleDetails;
