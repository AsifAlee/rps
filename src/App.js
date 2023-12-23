import "./App.scss";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useContext, useEffect, useState } from "react";
import CommonButton from "./components/CommonButton";
import BattleTab from "./layout/Tabs/BattleTab";
import LuckyPlayer from "./layout/Tabs/LuckyPlayer";
import TalentTour from "./layout/Tabs/TalentTour";
import ScrollToTopButton from "./components/ScrollToTopButton";
import EventGifting from "./layout/Popups/EventGifting";
import Guide from "./layout/Popups/Guide";
import GuidePopup from "./layout/Popups/GuidePopup";
import { AppContext } from "./AppContext";

function App() {
  const { user } = useContext(AppContext);
  const [mainTabs, setMainTabs] = useState({
    battle: true,
    luckyPlayer: false,
    talentTour: false,
  });

  useEffect(() => {
    if (user.token) {
      alert(user.token);
    }
  }, [user]);

  const [eventGifting, setEventGifting] = useState(false);
  const [guide, setGuide] = useState(false);

  const toggleEventGifitng = () => {
    setEventGifting((prevState) => !prevState);
  };
  const toggleGuide = () => {
    setGuide((prevState) => !prevState);
  };

  const toggleMainTabs = (name) => {
    if (name === "battle") {
      setMainTabs({
        battle: true,
        luckyPlayer: false,
        talentTour: false,
      });
    } else if (name === "lucky-player") {
      setMainTabs({
        battle: false,
        luckyPlayer: true,
        talentTour: false,
      });
    }
    if (name === "talent-tour") {
      setMainTabs({
        battle: false,
        luckyPlayer: false,
        talentTour: true,
      });
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="d-flex j-sb guideNGifting">
        <CommonButton
          btnImg={"guide"}
          width={"21vw"}
          handleClick={toggleGuide}
        />
        <CommonButton
          btnImg={"event-gifting"}
          width={"27vw"}
          handleClick={toggleEventGifitng}
        />
      </div>

      <div>
        <div className="main-tabs">
          <button
            className={`main-tab-button ${!mainTabs.battle && "hide"}`}
            onClick={() => toggleMainTabs("battle")}
            style={{ left: "-3vw" }}
          >
            RPS BATTLE
          </button>

          <button
            className={`main-tab-button ${!mainTabs.luckyPlayer && "hide"}`}
            onClick={() => toggleMainTabs("lucky-player")}
            style={{ left: "2vw" }}
          >
            LUCKY PLAYER
          </button>

          <button
            className={`main-tab-button ${!mainTabs.talentTour && "hide"}`}
            onClick={() => toggleMainTabs("talent-tour")}
            style={{ left: "3vw" }}
          >
            TALENT TOUR
          </button>
        </div>
      </div>

      {mainTabs.battle ? (
        <BattleTab />
      ) : mainTabs.luckyPlayer ? (
        <LuckyPlayer />
      ) : (
        <TalentTour />
      )}
      <p className="rights">All rights reserved by streamkar</p>

      <ScrollToTopButton />

      {eventGifting && <EventGifting popUpHandler={toggleEventGifitng} />}
      {/* {guide && <Guide clickHandler={toggleGuide} />} */}
      {guide && <GuidePopup clickHandler={toggleGuide} />}
    </div>
  );
}

export default App;
