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

// import React, { useEffect, useState } from "react";
// import { getRewardsImage } from "../functions";
// import "../styles/tour-component.scss";

// const TourComponent = ({ rew, isAchieved }) => {
//   const [isColorFul, setIsColorFul] = useState(false);
//   useEffect(() => {
//     if (
//       (rew == "Battle Master frame" && isAchieved == true) ||
//       (rew == "Topliner frame" && isAchieved == true)
//     ) {
//       setIsColorFul(true);
//       setTimeout(() => {
//         setIsColorFul(false);
//       }, 1000);
//     }
//   }, [rew]);

//   return !isColorFul ? (
//     <div className={`tour-comp blackNWhite ${isAchieved && "colorFull"}`}>
//       <img
//         src={getRewardsImage(rew)}
//         className={`blackNWhite ${isAchieved && "colorFull"}`}
//       />
//     </div>
//   ) : (
//     <div className="tour-comp blackNWhite colorFull">
//       <img src={getRewardsImage(rew)} className="blackNWhite colorFull" />
//     </div>
//   );
// };

// export default TourComponent;
