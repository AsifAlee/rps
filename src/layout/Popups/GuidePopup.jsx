import React, { useContext, useEffect } from "react";
import "../../styles/guide-popup.scss";
import title from "../../assets/images/guide/guide-title.png";
import { gifts } from "../../constants";
import Gift from "../../components/Gift";
import Accordion from "../../components/Accordion";
import { AppContext } from "../../AppContext";
const GuidePopup = ({ clickHandler }) => {
  const { selectedLng } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="guide-popup">
      <button className="closeBtn" onClick={clickHandler} />
      <div className="title-wrap">
        <img src={title} className="title" />
      </div>
      <div className="guide-content">
        <div className="guide-gifts">
          <p className="gift-title"> GIFTS</p>

          <div className="gifts-container">
            {gifts.map((item) => (
              <Gift item={item} />
            ))}
          </div>
        </div>
        {/* <div className="howToPlaySec">
          <p className="howTitle"> HOW TO PLAY?</p>
          <div className="acc-section">
            <div style={{}}>
              <Accordion headerTxt={1}>
                <div className="body-item">
                  <ol>
                    <li>
                      Jab aap event gifts bhejen gy, tou aap haasil karen gy
                      Game Points.{" "}
                      <span className="highlight">
                        1 bean of event gift sent = 1 Game Point.
                      </span>
                    </li>
                    <li>
                      In game points k saath aap Rock, Paper, aur Scissors
                      Battle khel sakte hain.
                    </li>
                    <li>
                      Aapko teen images mein sy kisi aik ko select karna hoga,
                      phir RPS Battle khelne k liye "PLAY" button par tap karna
                      hoga.
                    </li>
                    <li>
                      <p className="highlight">
                        "PLAY" button par aik baar tap = 15k Game Points.
                      </p>
                    </li>
                    <li>
                      Jab aap "PLAY" button par successfully tap karen gy, Game
                      points deduct hojayen gy aur aapko reward milega.
                    </li>
                    <li>
                      Jab aap "PLAY" button par tap karty hain aur game jeet
                      jaate hain, tou "Battles won" counter mein "1" value add
                      hogi. Agar aap tie ya loss karty hain, tou aapko koi
                      points nahi milein gy.
                    </li>
                    <li>
                      Sabse zyada Battles jeetne wale users ko leaderboard par
                      dikhaya jayega aur unhy Beans Pot Reward milein gy.
                    </li>
                    <li>
                      <p className="highlight">
                        Event gifts par kharch hone wale beans ka 0.5% beans pot
                        mein collect hoga aur collect kiye gaye Beans ko
                        leaderboard k top 3 rankers k beech har roz distribute
                        kiya jae ga
                      </p>
                    </li>
                  </ol>
                </div>
              </Accordion>
            </div>
            <div style={{ position: "relative", top: "-1vw" }}>
              <Accordion headerTxt={2}>
                <div className="body-item">
                  <ol>
                    <li>
                      Jab aap event gifts bhejen gy, tou aap haasil karen gy
                      Game Points.{" "}
                      <span className="highlight">
                        1 bean of event gift sent = 1 Game Point.
                      </span>
                    </li>
                    <li>
                      Event k is hissay mein, aap rozana sirf 10 Lucky Cards
                      "Scratch" kar sakty hain aur din khatam hone par 1 (random
                      user) Lucky winner announce hoga jo 3 khaas inaam jeety
                      ga.
                    </li>
                    <li>
                      "Information" button aapko event k is hissay k mutaliq
                      guide kare ga.
                    </li>
                    <li>
                      <p className="highlight">
                        Aap rozana zyada sy zyada 10 lucky cards scratch kar
                        sakty hain.
                      </p>
                    </li>
                    <li>
                      <p className="highlight">
                        1 Lucky Card = 50k Game Points.
                      </p>
                    </li>
                    <li>
                      "SCRATCH" button ko kamiyabi sy tap karne par, Game Points
                      kat jayen gy, aur "My Lucky Numbers" section mein ek
                      makhsoos 5-digit random alphanumeric number zahir kiya
                      jayega.
                    </li>
                    <li>
                      Jab aap "SCRATCH" button par kamiyabi sy tap karen gy, tou
                      aap ko inaam milein gy.
                    </li>

                    <li>
                      "Daily Scratch Remaining" Counter batata hai k baqi kitne
                      Lucky Cards Scratch karne hain
                    </li>
                    <li>
                      Har roz 00:00:00 GMT par, Lucky Number reveal section main
                      aik animation "Golden Card" par dikhai jayegi, jo
                      scratched Lucky Cards mein sy aik random number ko "Golden
                      Card" par reveal karegi
                    </li>
                    <li>
                      Jis user ka Lucky Card number "Golden Card" par dikhaye
                      gaye number sy match karega, use winner qarar diya jayega
                      aur use khaas inaam milein gy.
                    </li>
                    <li>
                      Har roz pehle 200 users muft Lucky Card scratch ka maza le
                      sakte hain.
                    </li>
                    <li>
                      Muft mauqe k saath apna pehla Lucky Card scratch karne
                      wale user ko scratch button k inaam nahi milein gy.
                    </li>
                    <li>
                      Tamam statistics har din 00:00:00 GMT par taaza ho
                      jayengi.
                    </li>
                  </ol>
                </div>
              </Accordion>
            </div>
            <div>
              <Accordion headerTxt={3}>
                <div className="body-item">
                  <ol>
                    <li>
                      Jab aap 20,000 beans kay event gifts haasil karte hain,
                      tou aap ko 1 spaceship ticket mile ga.
                      <span className="highlight">
                        Event gifts of 20,000 beans = 1 Spaceship Ticket.
                      </span>
                    </li>
                    <li>Webpage par “My Spaceship Tickets” ka counter hai.</li>
                    <li>
                      Event kay is hissay mein aap do alag alag planets par
                      safar karne ka mouqa payenge aur inaam hasil karen gy.
                    </li>
                    <li>Webpage par 2 planets (Saturn aur Neptune) hain</li>
                    <li>
                      Saturn planet unlock hai aur Neptune planet lock hai.
                    </li>
                    <li>
                      Dono Saturn aur Neptune mein 10 inaam grid ki surat mein
                      majood hain.
                    </li>
                    <li> Webpage par aik "Travel" button hai.</li>
                    <li>
                      <p className="highlight">
                        Har bar safar karne ke liye aapko 1 Spaceship Ticket ki
                        zarurat hogi.
                      </p>
                    </li>
                    <li>
                      Jab aap "Travel" button par kamiyabi se tap karte hain,
                      tou aap ko inaam mile ga
                    </li>

                    <li>
                      Jab aap tamam 10 inaam kamiyabi se hasil karte hain, tou
                      agla planet yani Neptune unlock ho jayega.
                    </li>

                    <li>
                      Aapko pehle planet Saturn ka safar pura karna zaruri hai
                      phir aap agle planet Neptune ka safar shuru kar sakte hain
                    </li>
                    <li>
                      Agar tamam safar kamiyabi se mukammal hote hain, tou aap
                      dono planets mein se kisi bhi aik par dobara inaam hasil
                      karne ja sakte hain.
                    </li>
                    <li>
                      <p className="highlight">
                        Dono planets mein safar k alag alag inaam hain
                      </p>
                    </li>
                  </ol>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="event-gft-cont">
            <h2 className="e-title">Event Gifting</h2>
            <div className="d-flex f-column text-left">
              <span className="e-title text-left"> For Users:</span>
              <ol>
                <li>Total ranking mein, top 3 users ko rewards milein gay.</li>
                <li>
                  Rewards event khatam honay k 7 din baad tak send kiye jayen
                  gay.
                </li>
              </ol>
            </div>
            <div className="d-flex f-column text-left">
              <span className="e-title text-left"> For Talents:</span>
              <ol>
                <li>
                  Total ranking mein, top 3 talents ko rewards milein gay.
                </li>
                <li>
                  Rewards event khatam honay k 7 din baad tak send kiye jayen
                  gay.
                </li>
              </ol>
            </div>
          </div>
        </div> */}
        {selectedLng === 1 ? (
          <div className="howToPlaySec">
            <p className="howTitle"> HOW TO PLAY?</p>
            <div className="acc-section">
              <div>
                <Accordion headerTxt={1}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you send event gifts, you will get Game Points.{" "}
                        <span className="highlight">
                          1 bean of event gift = 1 Game Point.
                        </span>
                      </li>
                      <li>
                        In this part of the event, you will be able to “Scratch”
                        only 10 Lucky Cards daily, and at the end of the day 1
                        (random user) Lucky winner will be announced and will
                        get 3 special rewards.
                      </li>
                      <li>
                        You have to select any one of the 3 images and then tap
                        on the “PLAY” button to play the RPS Battle.
                      </li>
                      <li>
                        <p className="highlight">
                          1-time tap on the “PLAY” button = 15k Game Points.
                        </p>
                      </li>
                      <li>
                        When you tap on the “PLAY” button successfully, Game
                        points will be deducted and you will get a reward.
                      </li>
                      <li>
                        When you tap on the “PLAY” button and win the game, the
                        value “1” will be added to the “Battles won” counter. If
                        you get a tie or loss, you will not get any points.
                      </li>
                      <li>
                        The users with the highest number of Battles Won will be
                        displayed on the leaderboard accordingly and will win
                        Beans Pot Reward
                      </li>
                      <li>
                        <p className="highlight">
                          0.5% of spending will be collected in the BEANS POT
                          and collected Beans will be distributed among the top
                          3 Rankers of the leaderboard, each day.
                        </p>
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div style={{ position: "relative", top: "-1vw" }}>
                <Accordion headerTxt={2}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you send event gifts, you will get Game Points.{" "}
                        <span className="highlight">
                          1 bean of event gift = 1 Game Point.
                        </span>
                      </li>
                      <li>
                        In this part of the event, you will be able to “Scratch”
                        only 10 Lucky Cards daily, and at the end of the day 1
                        (random user) Lucky winner will be announced and will
                        get 3 special rewards.
                      </li>
                      <li>
                        The "Information" button will show you the guide related
                        to this part of the event.
                      </li>
                      <li>
                        <p className="highlight">
                          You can scratch a maximum of 10 lucky cards per day.
                        </p>
                      </li>
                      <li>
                        <p className="highlight">
                          1 Lucky Card = 50k Game Points.
                        </p>
                      </li>
                      <li>
                        Upon successful tapping of the "SCRATCH" button, Game
                        Points will be deducted, and a distinctive 5-digit
                        random alphanumeric number will be revealed in the "My
                        Lucky Numbers" section.
                      </li>
                      <li>
                        When you tap on the “SCRATCH” button successfully, you
                        will get rewards.
                      </li>
                      <li>
                        A “Daily Scratch Remaining” Counter denotes the Lucky
                        Cards remaining to be Scratched.
                      </li>
                      <li>
                        Every day at 00:00:00 GMT, in the Lucky Number reveal
                        section an animation will reveal a random number from
                        the scratched Lucky Cards on the "Golden Card".
                      </li>
                      <li>
                        The user whose Lucky Card number matches the one
                        displayed on the “Golden Card” will be declared the
                        winner and will receive special rewards.
                      </li>
                      <li>
                        The user whose Lucky Card number matches with the number
                        displayed on the "Golden Card" will be declared the
                        winner and will receive special rewards.
                      </li>
                      <li>
                        The first 200 users each day can enjoy a complimentary
                        Lucky Card scratch.
                      </li>
                      <li>
                        Users scratching their Lucky Card for the first time
                        with the free chance won't receive scratch button
                        rewards
                      </li>
                      <li>
                        <p className="highlight">
                          All stats will refresh at 00:00:00 GMT Daily.
                        </p>
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div>
                <Accordion headerTxt={3}>
                  <div className="body-item">
                    <ol>
                      <li>
                        When you receive event gifts of 20,000 beans, you will
                        get 1 spaceship ticket.{" "}
                        <span className="highlight">
                          Event gifts of 20,000 beans = 1 Spaceship Ticket.
                        </span>
                      </li>
                      <li>
                        “My Spaceship Tickets” counter is displayed on the
                        webpage.
                      </li>
                      <li>
                        In this part of the event, you will be able to travel
                        through 2 different planets & will get rewards.
                      </li>
                      <li>
                        2 Planets (Saturn and Neptune) are displayed on the
                        webpage
                      </li>
                      <li>
                        Saturn planet is unlocked & Neptune planet is locked.
                      </li>
                      <li>
                        Both Saturn and Neptune will feature 10 rewards arranged
                        in a grid shape.
                      </li>
                      <li> A “Travel” button is displayed on the webpage.</li>
                      <li>
                        <p className="highlight">
                          You will need 1 Spaceship Ticket to travel 1 time.
                        </p>
                      </li>
                      <li>
                        When you tap on the “Travel” button successfully, you
                        will get the reward.
                      </li>

                      <li>
                        When you get all 10 rewards successfully, the next
                        planet i.e. Neptune will be unlocked.
                      </li>

                      <li>
                        You must complete the trip to Saturn planet so you can
                        start the next planet Neptune.
                      </li>

                      <li>
                        If all travels are successful, you can freely choose to
                        travel any of the 2 planets to claim rewards again.
                      </li>
                      <li>
                        <p className="highlight">
                          Each of the 2 planets has different travel rewards
                        </p>
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div>
                <Accordion headerTxt={4}>
                  <div className="body-item">
                    <div className="d-flex f-column text-left">
                      <span className="e-title text-left highlight">
                        {" "}
                        For Users:
                      </span>
                      <ol>
                        <li>
                          In the total ranking, the top 3 users will be
                          rewarded.
                        </li>
                        <li>
                          Rewards will be sent after 7 working days of the event
                          end date.
                        </li>
                      </ol>
                    </div>
                    <div className="d-flex f-column text-left">
                      <span className="e-title text-left highlight">
                        {" "}
                        For Talents:
                      </span>
                      <ol>
                        <li>
                          In the total ranking, the top 3 talents will be
                          rewarded.
                        </li>
                        <li>
                          Rewards will be sent after 7 working days of the event
                          end date.
                        </li>
                      </ol>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <div className="howToPlaySec">
            <p className="howTitle"> HOW TO PLAY?</p>
            <div className="acc-section">
              <div>
                <Accordion headerTxt={1}>
                  <div className="body-item">
                    <ol>
                      <li>
                        Jab aap event gifts bhejen gy, tou aap haasil karen gy
                        Game Points.{" "}
                        <span className="highlight">
                          1 bean of event gift sent = 1 Game Point.
                        </span>
                      </li>
                      <li>
                        In game points k saath aap Rock, Paper, aur Scissors
                        Battle khel sakte hain.
                      </li>
                      <li>
                        Aapko teen images mein sy kisi aik ko select karna hoga,
                        phir RPS Battle khelne k liye "PLAY" button par tap
                        karna hoga.
                      </li>
                      <li>
                        <p className="highlight">
                          "PLAY" button par aik baar tap = 15k Game Points.
                        </p>
                      </li>
                      <li>
                        Jab aap "PLAY" button par successfully tap karen gy,
                        Game points deduct hojayen gy aur aapko reward milega.
                      </li>
                      <li>
                        Jab aap "PLAY" button par tap karty hain aur game jeet
                        jaate hain, tou "Battles won" counter mein "1" value add
                        hogi. Agar aap tie ya loss karty hain, tou aapko koi
                        points nahi milein gy.
                      </li>
                      <li>
                        Sabse zyada Battles jeetne wale users ko leaderboard par
                        dikhaya jayega aur unhy Beans Pot Reward milein gy.
                      </li>
                      <li>
                        <p className="highlight">
                          Event gifts par kharch hone wale beans ka 0.5% beans
                          pot mein collect hoga aur collect kiye gaye Beans ko
                          leaderboard k top 3 rankers k beech har roz distribute
                          kiya jae ga
                        </p>
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div style={{ position: "relative", top: "-1vw" }}>
                <Accordion headerTxt={2}>
                  <div className="body-item">
                    <ol>
                      <li>
                        Jab aap event gifts bhejen gy, tou aap haasil karen gy
                        Game Points.{" "}
                        <span className="highlight">
                          1 bean of event gift sent = 1 Game Point.
                        </span>
                      </li>
                      <li>
                        Event k is hissay mein, aap rozana sirf 10 Lucky Cards
                        "Scratch" kar sakty hain aur din khatam hone par 1
                        (random user) Lucky winner announce hoga jo 3 khaas
                        inaam jeety ga.
                      </li>
                      <li>
                        "Information" button aapko event k is hissay k mutaliq
                        guide kare ga.
                      </li>
                      <li>
                        <p className="highlight">
                          Aap rozana zyada sy zyada 10 lucky cards scratch kar
                          sakty hain.
                        </p>
                      </li>
                      <li>
                        <p className="highlight">
                          1 Lucky Card = 50k Game Points.
                        </p>
                      </li>
                      <li>
                        "SCRATCH" button ko kamiyabi sy tap karne par, Game
                        Points kat jayen gy, aur "My Lucky Numbers" section mein
                        ek makhsoos 5-digit random alphanumeric number zahir
                        kiya jayega.
                      </li>
                      <li>
                        Jab aap "SCRATCH" button par kamiyabi sy tap karen gy,
                        tou aap ko inaam milein gy.
                      </li>

                      <li>
                        "Daily Scratch Remaining" Counter batata hai k baqi
                        kitne Lucky Cards Scratch karne hain
                      </li>
                      <li>
                        Har roz 00:00:00 GMT par, Lucky Number reveal section
                        main aik animation "Golden Card" par dikhai jayegi, jo
                        scratched Lucky Cards mein sy aik random number ko
                        "Golden Card" par reveal karegi
                      </li>
                      <li>
                        Jis user ka Lucky Card number "Golden Card" par dikhaye
                        gaye number sy match karega, use winner qarar diya
                        jayega aur use khaas inaam milein gy.
                      </li>
                      <li>
                        Har roz pehle 200 users muft Lucky Card scratch ka maza
                        le sakte hain.
                      </li>
                      <li>
                        Muft mauqe k saath apna pehla Lucky Card scratch karne
                        wale user ko scratch button k inaam nahi milein gy.
                      </li>
                      <li>
                        Tamam statistics har din 00:00:00 GMT par taaza ho
                        jayengi.
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>
              <div>
                <Accordion headerTxt={3}>
                  <div className="body-item">
                    <ol>
                      <li>
                        Jab aap 20,000 beans kay event gifts haasil karte hain,
                        tou aap ko 1 spaceship ticket mile ga.
                        <span className="highlight">
                          Event gifts of 20,000 beans = 1 Spaceship Ticket.
                        </span>
                      </li>
                      <li>
                        Webpage par “My Spaceship Tickets” ka counter hai.
                      </li>
                      <li>
                        Event kay is hissay mein aap do alag alag planets par
                        safar karne ka mouqa payenge aur inaam hasil karen gy.
                      </li>
                      <li>Webpage par 2 planets (Saturn aur Neptune) hain</li>
                      <li>
                        Saturn planet unlock hai aur Neptune planet lock hai.
                      </li>
                      <li>
                        Dono Saturn aur Neptune mein 10 inaam grid ki surat mein
                        majood hain.
                      </li>
                      <li> Webpage par aik "Travel" button hai.</li>
                      <li>
                        <p className="highlight">
                          Har bar safar karne ke liye aapko 1 Spaceship Ticket
                          ki zarurat hogi.
                        </p>
                      </li>
                      <li>
                        Jab aap "Travel" button par kamiyabi se tap karte hain,
                        tou aap ko inaam mile ga
                      </li>

                      <li>
                        Jab aap tamam 10 inaam kamiyabi se hasil karte hain, tou
                        agla planet yani Neptune unlock ho jayega.
                      </li>

                      <li>
                        Aapko pehle planet Saturn ka safar pura karna zaruri hai
                        phir aap agle planet Neptune ka safar shuru kar sakte
                        hain
                      </li>
                      <li>
                        Agar tamam safar kamiyabi se mukammal hote hain, tou aap
                        dono planets mein se kisi bhi aik par dobara inaam hasil
                        karne ja sakte hain.
                      </li>
                      <li>
                        <p className="highlight">
                          Dono planets mein safar k alag alag inaam hain
                        </p>
                      </li>
                    </ol>
                  </div>
                </Accordion>
              </div>

              <div>
                <Accordion headerTxt={4}>
                  <div className="body-item">
                    <div className="d-flex f-column text-left">
                      <span className="e-title text-left highlight">
                        {" "}
                        For Users:
                      </span>
                      <ol>
                        <li>
                          Total ranking mein, top 3 users ko rewards milein gay.
                        </li>
                        <li>
                          Rewards event khatam honay k 7 din baad tak send kiye
                          jayen gay.
                        </li>
                      </ol>
                    </div>
                    <div className="d-flex f-column text-left">
                      <span className="e-title text-left highlight">
                        {" "}
                        For Talents:
                      </span>
                      <ol>
                        <li>
                          Total ranking mein, top 3 talents ko rewards milein
                          gay.
                        </li>
                        <li>
                          Rewards event khatam honay k 7 din baad tak send kiye
                          jayen gay.
                        </li>
                      </ol>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidePopup;
