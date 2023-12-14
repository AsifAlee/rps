import React from "react";
import beans from "../assets/images/bean-icon.png";
import "../styles/gifting.scss";
import { baseUrl } from "../constants";
const Gift = ({ id, name, price }) => {
  return (
    <div className="gift">
      <div className="gift-details">
        <span className="name">{name}</span>
        <img src={`${baseUrl}/streamkar/gifts/${id}.png`} />
      </div>
      <div className="price">
        <span>{price}</span>

        <img src={beans} />
      </div>
    </div>
  );
};

export default Gift;
