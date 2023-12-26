import React from "react";
import { getRewardsImage } from "../functions";
import "../styles/tour-component.scss";

const TourComponent = ({ rew }) => {
  return (
    <div className="tour-comp">
      <img src={getRewardsImage(rew)} />
      <div className="base" />
    </div>
  );
};

export default TourComponent;
