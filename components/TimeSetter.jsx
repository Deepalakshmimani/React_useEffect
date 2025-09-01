import React from "react";

function TimeSetter({ time, onTimeChange, disabled }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onTimeChange({ ...time, [name]: parseInt(value) || 0 });
  };

  return (
    <div className="time-setter">
      <input
        type="number"
        name="hours"
        value={time.hours}
        onChange={handleChange}
        disabled={disabled}
      />
      :
      <input
        type="number"
        name="minutes"
        value={time.minutes}
        onChange={handleChange}
        disabled={disabled}
      />
      :
      <input
        type="number"
        name="seconds"
        value={time.seconds}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

export default TimeSetter;
