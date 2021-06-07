import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-6-8`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        seconds: Math.floor((difference / 1000) % 60)

      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  });
  timerComponents.push(
    <span class="sp">
      {timeLeft["days"]}<span class="int">d</span>
    </span>
  );

  timerComponents.push(
    <span class="sp">
      {timeLeft["hours"]}<span class="int">h</span>
    </span>

  );
  <span class="int">h</span>
  timerComponents.push(
    <span class="sp">
      {timeLeft["minutes"]}<span class="int">m</span>

    </span>
  );

  timerComponents.push(
    <span class="sp">
      {timeLeft["seconds"]}<span class="int">s</span>
    </span>
  );





  return (
    <div class="wrap">

      <div className="parent">
        <div className="LOGOS">
          <ul className="LOGOS">
            <li className="iecse"></li>
            
            <li className="wire"></li>

          </ul>





        </div>

        <div class="des"><span class="s"><span style={{ marginRight: '1rem', letterSpacing: "3px", fontSize: "1rem" }} >C  O  D  E</span><span style={{ marginRight: '1rem', letterSpacing: "3px", fontSize: "1rem" }}>T O</span><span style={{
          marginRight: '1rem', letterSpacing: "3px", fontSize: "1rem",
          fontFamily: "Chakra Petch"
        }}>R E B E L</span></span>
          <span style={{ marginRight: '1rem', letterSpacing: "3px", fontSize: "1rem", fontFamily: "Chakra Petch" }}>I N</span>
        </div>

        <div class="timer">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <div className="text">
          <p>

          Wireframe is a five day long UI/UX development event for all the front end web and mobile developers! You will work on the front end of a web or mobile app on the given theme. Choose any tech stack you like to stop the criminal activities in America and win amazing cash prizes and goodies!


          </p>

        </div>
      </div>
    </div>




  );
}

export default App;











