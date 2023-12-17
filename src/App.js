import "./App.scss";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import CommonButton from "./components/CommonButton";
import BattleTab from "./layout/Tabs/BattleTab";
import LuckyPlayer from "./layout/Tabs/LuckyPlayer";
import TalentTour from "./layout/Tabs/TalentTour";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [mainTabs, setMainTabs] = useState({
    battle: true,
    luckyPlayer: false,
    talentTour: false,
  });

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
        <CommonButton btnImg={"guide"} width={"21vw"} />
        <CommonButton btnImg={"event-gifting"} width={"27vw"} />
      </div>

      <div>
        <div className="main-tabs">
          <button
            className={`main-tab-button ${!mainTabs.battle && "hide"}`}
            onClick={() => toggleMainTabs("battle")}
          >
            RPS BATTLE
          </button>

          <button
            className={`main-tab-button ${!mainTabs.luckyPlayer && "hide"}`}
            onClick={() => toggleMainTabs("lucky-player")}
          >
            LUCKY PLAYER
          </button>

          <button
            className={`main-tab-button ${!mainTabs.talentTour && "hide"}`}
            onClick={() => toggleMainTabs("talent-tour")}
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
    </div>
  );
}

export default App;
