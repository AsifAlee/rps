import { createContext, useEffect, useState } from "react";
import { baseUrl, testUserId, userOverallPot } from "./constants";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
  let day, months, years, dateStr, dateStrPrev;
  const date = new Date();

  day = date.getUTCDate();

  months = date.getUTCMonth() + 1;
  years = date.getUTCFullYear();

  day = day < 10 ? `0${day}` : day;
  dateStr = years + "-" + months + "-" + day;
  dateStrPrev = years + "-" + months + "-" + (day - 1);
  const [info, setInfo] = useState({
    isScrtached: true,
    gamePoints: 0,
    talentPoints: 0,
    battlesCount: 0,
    potInfo: {},
    lastLuckyCard: "",
    dailyScratchRemaining: 0,
    saturnUnlockRewardInfoList: [],
    neptuneUnlockRewardInfoList: [],
    travelPlanetIndex: 0,
    travelPlanetIndex: 0,
  });

  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });
  const [tickerData, setTickerData] = useState([]);

  const [giftingLbData, setGiftingLbData] = useState({
    user: [],
    talent: [],
    battle: [],
    battlePrev: [],
  });
  const [records, setRecords] = useState({
    rps: [],
    scratch: [],
    tour: [],
  });
  const [selectedLng, setSelectedLng] = useState(1);
  const [lastLuckyWinners, setLastLuckyWinners] = useState([]);
  const [talentTourLbData, setTalentTourLbData] = useState([]);
  const [todayLuckyTickets, setTodayLuckyTickets] = useState([]);
  const [yestLuckyTickets, setYestLuckyTickets] = useState([]);

  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          userId: userInfo?.userId ? userInfo?.userId : 0,
          token: userInfo?.token ? userInfo?.token : "",
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    getTalentOverall();
    getUserOverall();
  }, []);

  useEffect(() => {
    // getInfo();
    // getBattleRecords();
    // getScratchRecords();
    // getTourRecords();
    getBattleLbData();
    getBattleLbDataPrev();
    getLastLuckyWinners();
    geTalentTourLbData();
  }, []);

  useEffect(() => {
    getInfo();
    if (user.userId) getInfo();
  }, [user]);

  const getUserOverall = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240109_rps&rankIndex=11&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLbData((prevState) => ({
            ...prevState,
            user: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getTalentOverall = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240109_rps&rankIndex=12&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setGiftingLbData((prevState) => ({
            ...prevState,
            talent: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getBattleLbData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240109_rps&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${dateStr}`
    )
      .then((response) =>
        response.json().then((response) => {
          // debugger;
          setGiftingLbData((prevState) => ({
            ...prevState,
            battle: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getBattleLbDataPrev = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240109_rps&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${dateStrPrev}`
    )
      .then((response) =>
        response.json().then((response) => {
          // debugger;
          setGiftingLbData((prevState) => ({
            ...prevState,
            battlePrev: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getInfo = () => {
    fetch(`${baseUrl}/api/activity/rps/getUserEventInfo?userId=${user.userId}`)
      .then((response) =>
        response.json().then((response) => {
          // debugger;
          setInfo({
            ...info,
            gamePoints: response?.data?.gamePoints,
            // gamePoints: 0,

            battlesCount: response?.data?.battlesCount,
            potInfo: response?.data?.potInfo,
            lastLuckyCard: response?.data?.lastLuckyNumber,
            dailyScratchRemaining: response?.data?.dailyScratchRemaining,
            saturnUnlockRewardInfoList:
              response?.data?.saturnUnlockRewardInfoList,
            neptuneUnlockRewardInfoList:
              response?.data?.neptuneUnlockRewardInfoList,
            travelPlanetIndex: response?.data?.travelPlanetIndex,
            todayLuckyTickets: response?.data?.todayLuckyTickets,
            yestLuckyTickets: response?.data?.yesterdayLuckyTickets,
            talentPoints: Math.floor(response?.data?.talentPoints / 25000),
            travelPlanetIndex: response?.data?.travelPlanetIndex,
          });
        })
      )
      .catch((error) => {});
  };

  const getBattleRecords = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20240109_rps&rankIndex=21&pageNum=1&pageSize=20&type=1&userId=596492373`
    )
      .then((response) =>
        response.json().then((response) => {
          setRecords((prevState) => ({
            ...prevState,
            rps: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getScratchRecords = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20240109_rps&rankIndex=21&pageNum=1&pageSize=20&type=2&userId=596492373`
    )
      .then((response) =>
        response.json().then((response) => {
          setRecords((prevState) => ({
            ...prevState,
            scratch: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getTourRecords = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20240109_rps&rankIndex=21&pageNum=1&pageSize=20&type=3&userId=596492373`
    )
      .then((response) =>
        response.json().then((response) => {
          setRecords((prevState) => ({
            ...prevState,
            tour: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getTickerData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240109_rps&rankIndex=1&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setRecords((prevState) => ({
            ...prevState,
            tickerData: response?.data?.list || [],
          }));
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getLastLuckyWinners = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240109_rps&rankIndex=1&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setLastLuckyWinners(response?.data?.list || []);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const geTalentTourLbData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240109_rps&rankIndex=2&pageNum=1&pageSize=20`
    )
      .then((response) =>
        response.json().then((response) => {
          setTalentTourLbData(response?.data?.list || []);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const calculateEstRewards = (index) => {
    console.log("the est index is:", index);
    // const potCount = info.potInfo[dateStr];
    // debugger;
    const percent = userOverallPot.find((item) => item.rank === index).percent;
    const result = Math.floor((percent / 100) * info.potInfo[dateStr]);

    return result;
  };

  return (
    <AppContext.Provider
      value={{
        info,
        changeLanguage,
        selectedLng,
        user,
        giftingLbData,
        getInfo,
        records,
        getBattleRecords,
        getScratchRecords,
        getTourRecords,
        tickerData,
        lastLuckyWinners,
        talentTourLbData,
        geTalentTourLbData,
        getLastLuckyWinners,
        dateStr,
        getBattleLbData,
        calculateEstRewards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
