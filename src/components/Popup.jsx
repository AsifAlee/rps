import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const {
    children,
    bg,
    isSendCard,
    isOverflow,
    schedule,
    isRewardHist,
    info,
    game,
    isJoin,
    isGuide,
    sure,
    details,
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
              ? "171vw"
              : sure
              ? "45vw"
              : game
              ? "90vw"
              : isRewardHist
              ? "100vw"
              : details
              ? "100vw"
              : ""
          }`,
          height: isSendCard && "117vw",
          width: `${
            schedule
              ? "100%"
              : game
              ? "73%"
              : isGuide
              ? "90%"
              : isRewardHist
              ? "85%"
              : info
              ? "90%"
              : isJoin
              ? "94vw"
              : details
              ? "95%"
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
