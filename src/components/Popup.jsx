import React, { useEffect } from "react";
import "../styles/popups.scss";
const PopUp = (props) => {
  const {
    children,
    bg,
    title,
    popUpHandler,
    isAccPopUp,
    isRewards,
    isGame,
    isMilestone,
    isCollSold,
    isSendCard,
    isOverflow,
    schedule,
    isRewardHist,
    planeInfo,
    info,
    game,
    guide,
    isJoin,
    isGuide,
    sure,
  } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            isGuide
              ? "100vw"
              : sure
              ? "45vw"
              : game
              ? "90vw"
              : isRewardHist
              ? "100vw"
              : ""
          }`,
          height: isSendCard && "117vw",
          width: `${
            schedule
              ? "100%"
              : game
              ? "73%"
              : guide
              ? "90%"
              : isRewardHist
              ? "85%"
              : info
              ? "90%"
              : isJoin
              ? "94vw"
              : ""
          }`,
          overflowY: isOverflow ? "auto" : "",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUp;
