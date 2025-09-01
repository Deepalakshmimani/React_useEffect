import { useState, useEffect } from "react";
import TimeSetter from "./components/TimeSetter";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButton";
import './App.css';

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const totalSeconds =
            prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
          if (totalSeconds <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return { hours: 0, minutes: 0, seconds: 0 };
          }
          const newTotal = totalSeconds - 1;
          const hours = Math.floor(newTotal / 3600);
          const minutes = Math.floor((newTotal % 3600) / 60);
          const seconds = newTotal % 60;
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
   
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleTimeChange = (newTime) => setTime(newTime);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="countdown-app">
      <h1>Countdown Timer</h1>
      <TimeSetter time={time} onTimeChange={handleTimeChange} disabled={isRunning} />
      <TimerDisplay time={time} />
      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
