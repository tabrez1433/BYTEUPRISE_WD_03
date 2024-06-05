import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const getMinutes = `0${minutes}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(time)}</div>
      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button className="reset"onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
