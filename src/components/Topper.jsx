import React, { useContext } from "react";
import frame1 from "../assets/images/battle/1st-frame.png";
import frame2 from "../assets/images/battle/2nd-frame.png";
import frame3 from "../assets/images/battle/3rd-frame.png";

import unknown from "../assets/images/common/unknown-user.png";
import battleWonIcon from "../assets/images/battle/battles-won-icon.png";
import bean from "../assets/images/common/bean-icon.png";
import gems from "../assets/images/common/gems.png";

import "../styles/topper.scss";
import { getLevelImage, gotoProfile } from "../functions";
import { AppContext } from "../AppContext";
const Topper = ({
  index,
  user,
  isGifting,
  isTalent,
  showEstRewards,
  isPrev,
}) => {
  // debugger;
  const { calculateEstRewards } = useContext(AppContext);
  return (
    <div className="topper">
      <div
        className="topper-images"
        onClick={() => gotoProfile(user?.userId)}
        style={{ left: !isGifting ? "6vw" : "5vw" }}
      >
        <img
          src={index === 1 ? frame1 : index === 2 ? frame2 : frame3}
          className={index === 1 ? "rank" : index === 2 ? "rank2" : "rank3"}
        />
        <img
          src={user?.portrait ? user?.portrait : unknown}
          className={index === 1 ? "rank1-user" : "user"}
        />
      </div>
      <div
        className={`topper-details ${
          index === 1
            ? "rank1-detail-bg"
            : index === 2
            ? "rank2-detail-bg"
            : "rank3-detail-bg"
        }`}
        style={{
          width: !isGifting ? "92%" : "",
        }}
      >
        <div
          className="d-flex j-center al-center f-column"
          style={{ gap: "1vw" }}
        >
          <p className="name">{user?.nickname}</p>
          <img
            src={getLevelImage(
              isTalent ? user?.actorLevel : user?.userLevel,
              isTalent
            )}
            className="levelImg"
            style={{
              width: isTalent ? "8vw" : "",
            }}
          />
          {isGifting ? (
            <div
              className="beans-gems-div d-flex j-center al-center"
              style={{
                backgroundColor:
                  index === 1 ? "#161c40" : index === 2 ? "#2a1d1f" : "#561f0a",
              }}
            >
              <img src={isTalent ? gems : bean} />
              <span>{user?.userScore}</span>
            </div>
          ) : (
            <div
              className="battle-count-div d-flex j-center al-center"
              style={{
                backgroundColor:
                  index === 1 ? "#161c40" : index === 2 ? "#2a1d1f" : "#561f0a",
              }}
            >
              <img src={battleWonIcon} />
              <span>{user?.userScore}</span>
            </div>
          )}
          {showEstRewards ? (
            <div className="estimatedBeans">
              {`Est Beans:${calculateEstRewards(index, isPrev)}`}
              <img src={bean} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Topper;
