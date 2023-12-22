import React from "react";
import "../styles/gift.scss";
import { baseUrl } from "../constants";
import beanImg from "../assets/images/common/bean-icon.png";
const Gift = ({ item }) => {
  return (
    <div className="gift">
      <img
        src={`${baseUrl}/streamkar/gifts/${item.id}.png`}
        className="gift-img"
      />
      <div className="priceNText">
        <span className="name">{item.name}</span>
        <div className="price d-flex j-center al-center">
          <img src={beanImg} />
          <span className="price-text">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Gift;
