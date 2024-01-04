import React from "react";
import { getRewardsImage } from "../functions";
import "../styles/tour-component.scss";

const TourComponent = ({ rew, isAchieved }) => {
  return (
    <div className={`tour-comp blackNWhite ${isAchieved && "colorFull"}`}>
      <img
        src={getRewardsImage(rew)}
        className={`blackNWhite ${isAchieved && "colorFull"}`}
      />
    </div>
  );
};

export default TourComponent;
