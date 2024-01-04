import React, { useEffect, useRef } from "react";
import SVGA from "svgaplayerweb";

const SvgaPlayer = ({ src, start, rps, lucky, animFinished }) => {
  const playerRef = useRef(null);
  var player, parser;
  useEffect(() => {
    player = new SVGA.Player("#rpsSvga");
    parser = new SVGA.Parser("#rpsSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
    });
    playerRef.current = player;
    return () => {
      player.clear();
    };
  }, []);
  const handleStartClick = () => {
    playerRef.current.startAnimation();
  };
  const handleStopClick = () => {
    playerRef.current.stopAnimation();
    initializeSVGAPlayer();
  };
  useEffect(() => {
    if (start) {
      handleStartClick();
    } else {
      handleStopClick();
    }
  }, [start]);

  useEffect(() => {
    initializeSVGAPlayer();
  }, [lucky]);

  const initializeSVGAPlayer = () => {
    player = new SVGA.Player("#rpsSvga");
    parser = new SVGA.Parser("#rpsSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
    });
    playerRef.current = player;
  };

  return (
    <>
      <div
        // className={
        //   (snookerTable && "snooker-table") ||
        //   (stick && "snooker-stick") ||
        //   (crane && "crane") ||
        //   (foosball && "foosball-svg")
        // }
        className={rps ? "rpsSvga-wrap" : lucky ? "lucky-game-wrap" : ""}
        id="rpsSvga"
        style={{
          // display: lucky && !start ? "none" : "block",
          display: !start || animFinished ? "none" : "block",
        }}
      ></div>
    </>
  );
};

export default SvgaPlayer;
