import { createContext, useEffect, useState } from "react";
import { baseUrl, testUserId } from "./constants";

export const AppContext = createContext();

export const DataProvider = ({ children }) => {
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
  });

  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });

  const [giftingLbData, setGiftingLbData] = useState({
    user: [],
    talent: [],
  });
  const [selectedLng, setSelectedLng] = useState(1);

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
    getInfo();
  }, []);

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

  const getInfo = () => {
    fetch(`${baseUrl}/api/activity/rps/getUserEventInfo?userId=${testUserId}`)
      .then((response) =>
        response.json().then((response) => {
          setInfo({
            ...info,
            gamePoints: response.data.gamePoints,
            battlesCount: response.data.battlesCount,
            potInfo: response.data.potInfo,
            lastLuckyCard: response.data.lastLuckyCard,
            dailyScratchRemaining: response.data.dailyScratchRemaining,
            saturnUnlockRewardInfoList:
              response.data.saturnUnlockRewardInfoList,
            neptuneUnlockRewardInfoList:
              response.data.neptuneUnlockRewardInfoList,
            travelPlanetIndex: response.data.travelPlanetIndex,
          });
        })
      )
      .catch((error) => {});
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
