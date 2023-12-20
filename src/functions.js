import { baseUrl } from "./constants";

export const getLevelImage = (level, isTalent) => {
  const talentLevelUrl = `${baseUrl}/streamkar/common/img/tlv`;
  const userLevelUrl = `${baseUrl}/streamkar/common/img/ulv`;
  if (isTalent) {
    return `${talentLevelUrl}/${level}.png`;
  } else {
    return `${userLevelUrl}/${level}.png`;
  }
};

export const gotoProfile = (id) => {
  // debugger
  // return;
  window.location.href = `http://www.kktv1.com/m/?roomid=${id}`;
};

export function getRewardsImage(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("SVIP")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("Spaceship Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Spaceship entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Victory Slide Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/victorySlide.png";
  } else if (rewDesc?.includes("Victory Slide entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/victorySlide.png";
  } else if (rewDesc?.includes("Premier Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/premiumSkin.png";
  } else if (rewDesc?.includes("FireBrand Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/firebrand Profile frame.png";
  } else if (rewDesc?.includes("Sea Wolf Audio  theme")) {
    rewImg = baseUrl + "/streamkar/rewards/seaWolfRoomSkin.png";
  } else if (rewDesc?.includes("Sea Wolf Audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/seaWolfRoomSkin.png";
  } else if (rewDesc?.includes("Fury Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("Rusty Ranger Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Rusty Ranger entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("Loved One Profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/loveFrame.png";
  } else if (rewDesc?.includes("beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Room icon")) {
    rewImg = baseUrl + "/streamkar/rewards/roomIcon.png";
  } else if (rewDesc?.includes("Bunny profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc?.includes("Festive Token")) {
    rewImg = baseUrl + "/streamkar/rewards/FestiveToken.png";
  } else if (rewDesc?.includes("Game Master Audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterRoomSkin.png";
  } else if (rewDesc?.includes("Game Battle Profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Samurai Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/skSamuraiFrame.png";
  } else if (rewDesc?.includes("Night Shadow room")) {
    rewImg = baseUrl + "/streamkar/rewards/nightShadow.png";
  } else if (rewDesc?.includes("Moon Knight Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/moonKnightFrame.png";
  } else if (rewDesc?.includes("Desert Knight room")) {
    rewImg = baseUrl + "/streamkar/rewards/desertnightFrame.png";
  } else if (rewDesc?.includes("Follower Card")) {
    rewImg = baseUrl + "/streamkar/rewards/followerCard.png";
  } else if (rewDesc?.includes("gems")) {
    rewImg = baseUrl + "/streamkar/rewards/gems.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
export const getRewardDetails = (desc, count) => {
  let text = "";

  desc === "Beans"
    ? (text = `${count} Beans`)
    : desc === "gems"
    ? (text = `${count} Gems`)
    : desc === "Wildcards"
    ? (text = `${count} Wildcards`)
    : desc === "Trophies"
    ? (text = `${count} Trophies`)
    : desc === "Growth Points"
    ? (text = `${count} Growth Points`)
    : desc === "Firepower"
    ? (text = `${count} Firepower`)
    : desc === "Festive Token"
    ? (text = `${count} Festive Tokens`)
    : (text = `${desc}  x${count > 1 ? `${count} days` : `${count} day`}`);

  return text;
};
