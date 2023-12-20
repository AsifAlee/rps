import React from "react";
import { getRewardsImage } from "../functions";
import "../styles/tour-component.scss";

const TourComponent = ({ rewImg }) => {
  return (
    <div className="tour-comp">
      <img src={getRewardsImage("beansbag")} />
      <div className="base" />
    </div>
  );
};

export default TourComponent;
