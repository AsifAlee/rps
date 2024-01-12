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
  } else if (rewDesc?.includes("Game Battle frame")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Samurai Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/skSamuraiFrame.png";
  } else if (rewDesc?.includes("Night Shadow room")) {
    rewImg = baseUrl + "/streamkar/rewards/nightShadow.png";
  } else if (rewDesc?.includes("Moon Knight Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/moonKnightFrame.png";
  } else if (rewDesc?.includes("Desert Knight room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/desertNight.png";
  } else if (rewDesc?.includes("Followers Card")) {
    rewImg = baseUrl + "/streamkar/rewards/followerCard.png";
  } else if (rewDesc?.includes("gems")) {
    rewImg = baseUrl + "/streamkar/rewards/gems.png";
  } else if (rewDesc?.includes("Gems")) {
    rewImg = baseUrl + "/streamkar/rewards/gems.png";
  } else if (rewDesc?.includes("Safari Champion room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/safariChampionRoomSkin.png";
  } else if (rewDesc?.includes("Safari Champion Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/safariDesertframe.png";
  } else if (rewDesc?.includes("Blessed room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/blessedRoomSkin2k23.png";
  } else if (rewDesc?.includes("Peacemaker Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/peacemakerFrame.png";
  } else if (rewDesc?.includes("Peacemaker frame")) {
    rewImg = baseUrl + "/streamkar/rewards/peacemakerFrame.png";
  } else if (rewDesc?.includes("Maestro Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/maestro.png";
  } else if (rewDesc?.includes("Hawk entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/hawk.png";
  } else if (rewDesc?.includes("Gold Luxury entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/goldLuxury.png";
  } else if (rewDesc?.includes("Fortune room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneRoomSkin.png";
  } else if (rewDesc?.includes("Fortune room skin (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneRoomSkin.png";
  } else if (rewDesc?.includes("Fortune frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Fortune frame")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Fortune Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Fortune Frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Flaming Candle room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/flamingCandleRoomskin.png";
  } else if (rewDesc?.includes("Boss Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bossFrame.png";
  } else if (rewDesc?.includes("Victorious room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc?.includes("Monarch room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/monarchRoom.png";
  } else if (rewDesc?.includes("Desert Knight frame")) {
    rewImg = baseUrl + "/streamkar/rewards/desertnightFrame.png";
  } else if (rewDesc?.includes("Desert Knight Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/desertnightFrame.png";
  } else if (rewDesc?.includes("Kingpin entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/kingspin.png";
  } else if (rewDesc?.includes("Luminary Room Skin")) {
    rewImg = baseUrl + "/streamkar/rewards/luminarSkin.png";
  } else if (rewDesc?.includes("Game Battle frame")) {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  } else if (rewDesc?.includes("Game Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterRoomSkin.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Topliner frame")) {
    rewImg = baseUrl + "/streamkar/rewards/toplinerFrame.png";
  } else if (rewDesc?.includes("Topliner Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/toplinerFrame.png";
  } else if (rewDesc?.includes("Fortune room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/toplinerFrame.png";
  } else if (rewDesc?.includes("Fortune room skin (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/toplinerFrame.png";
  } else if (rewDesc?.includes("Fortune frame")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Fortune frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/fortuneFrame.png";
  } else if (rewDesc?.includes("Battle Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/battleMasterRoomSkin.png";
  } else if (rewDesc?.includes("Battle Master room skin (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/battleMasterRoomSkin.png";
  } else if (rewDesc?.includes("Battle Master Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/battleMaster.png";
  } else if (rewDesc?.includes("Battle Master frame")) {
    rewImg = baseUrl + "/streamkar/rewards/battleMaster.png";
  } else if (rewDesc?.includes("Battle Master frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/battleMaster.png";
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
    : desc === "Gems"
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

export const getRewardDetails2 = (desc, count) => {
  let text = "";

  desc === "Beans"
    ? (text = `${count}`)
    : desc === "gems"
    ? (text = `${count}`)
    : desc === "Gems"
    ? (text = `${count}`)
    : (text = `${count > 1 ? `x${count} days` : `x${count} day`}`);

  return text;
};

export const RpsWinLoss = (score) => {
  if (score >= 10 && score <= 12) {
    if (score === 10) return "Loss";
    else if (score === 11) return "Win";
    else return "Tie";
  } else if (score >= 20 && score <= 22) {
    if (score === 20) return "Loss";
    else if (score === 21) return "Win";
    else return "Tie";
  } else if (score >= 30 && score <= 32) {
    if (score === 30) return "Loss";
    else if (score === 31) return "Win";
    else return "Tie";
  }
};

export const formatData = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < originalArray?.length; i += 3) {
    newArray?.push(originalArray?.slice(i, i + 3));
  }

  return newArray;
};
