import React from "react";

function TimerDisplay({ time }) {
  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <h2>
      {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
    </h2>
  );
}

export default TimerDisplay;
