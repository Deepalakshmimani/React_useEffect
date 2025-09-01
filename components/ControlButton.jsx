import React from "react";

function ControlButtons({ isRunning, onStart, onStop, onReset }) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={onStart}>Start</button>
      ) : (
        <button onClick={onStop}>Stop</button>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default ControlButtons;
