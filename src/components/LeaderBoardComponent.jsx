import React, { useEffect, useRef, useState } from "react";
import "../styles/leaderboardcomp.scss";
import title from "../assets/images/battle/lb-title.png";
import TabButton from "./TabButton";
import Topper from "./Topper";
import { userOverallData } from "../testData";
import GameLeaderboartItem from "./GameLbItem";
import CommonButton from "./CommonButton";
const LeaderBoardComponent = () => {
  const [lbTabs, setLbTabs] = useState({
    today: true,
    prev: false,
  });
  const [seeMore, setSeeMore] = useState(true);
  const divRef = useRef(null);

  const toggleTabs = (name) => {
    if (name === "today") {
      setLbTabs({
        today: true,
        prev: false,
      });
    } else {
      setLbTabs({
        today: false,
        prev: true,
      });
    }
  };

  const toggleSeeMore = () => {
    setSeeMore((prevState) => !prevState);
  };

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (seeMore === true) {
      scrollToTop();
    }
  }, [seeMore]);
  return (
    <div className="leaderboard-comp m-auto">
      <img src={title} className="lb-title" />
      <div className="lb-tabs m-auto">
        <TabButton
          handleClick={toggleTabs}
          name="today"
          btnImg={lbTabs.today ? "today-sel" : "today-sel blackNWhite"}
          arrowImage={false}
          showArrowImg={false}
        />
        <TabButton
          handleClick={toggleTabs}
          name="prev"
          btnImg={lbTabs.prev ? "prev-sel" : "prev-sel blackNWhite"}
          arrowImage={false}
          showArrowImg={false}
        />
      </div>
      <div className="topper-sec">
        <div className="pos1">
          <Topper user={userOverallData[0]} index={1} />
        </div>

        <div className="pos2">
          <Topper user={userOverallData[1]} index={2} />
        </div>

        <div className="pos3">
          <Topper user={userOverallData[2]} index={3} />
        </div>
      </div>
      <div
        className={`rest-winners ${seeMore === false ? "scroll" : ""}`}
        ref={divRef}
      >
        {userOverallData.map((item, index) => (
          <GameLeaderboartItem index={index} item={item} />
        ))}
      </div>
      <div className="seeMore">
        <CommonButton
          btnImg={seeMore ? "see-more" : "see-less"}
          seeMore={true}
          handleClick={toggleSeeMore}
        />
      </div>
    </div>
  );
};

export default LeaderBoardComponent;
