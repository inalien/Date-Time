import React, { useState, useEffect, Fragment } from "react";
import TimeFormat from "hh-mm-ss";

const Timer = () => {
  let mainTime;
  const secondsLeft = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const left = (hours + 24) * 3600 + (0 + minutes) * 60 + (1 - seconds);
    return left;
  };

  const [seconds, setSeconds] = useState(secondsLeft());
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 0) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds(seconds => {
      const updatedSeconds = seconds + 1;
      if (updatedSeconds < 1) {
        stopTimer();
      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <Fragment>
      {h}:{m}:{s}
    </Fragment>
  );
};
export default Timer;
