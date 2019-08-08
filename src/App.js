import React from 'react';

import './App.css';
import Timer from './Components/Timer/Timer';

const timerConversion = (ms) => {
  if (ms >= 86399000) ms = 0
  let seconds = ms / 1000;
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60);
  return { hours, minutes, seconds };

}


function App() {
  let time = timerConversion(863900)
  return (
    <Timer hh={time.hours} mm={time.minutes} ss={time.seconds} />
  );
}

export default App;
