import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import './PomodoroTimer.css'; 

function PomodoroTimer() {
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [isTimerSet, setIsTimerSet] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    } else if (time === 0 && isTimerSet) {
      clearInterval(interval);
      alert("Time's up! Take a break.");
    }
    return () => clearInterval(interval);
  }, [isActive, time, isTimerSet]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStartPause = () => {
    if (time === 0) return;
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsSetting(true);
    setTime(initialTime * 60);
  };

  const handleSetTimer = () => {
    setTime(initialTime * 60);
    setIsTimerSet(true);
    setIsSetting(false);
  };

  const handleBackToSetting = () => {
    setIsActive(false);
    setIsSetting(true);
  };

  return (
    <Container className="pomodoro-widget">
      <Typography variant="h5" className='pomodoro-heading'>Pomodoro Timer</Typography>
      {isSetting ? (
        <div className="set-timer">
          <TextField
            type="number"
            value={initialTime}
            onChange={(e) => setInitialTime(e.target.value)}
            min="1"
            label="Minutes"
            variant="outlined"
            size="small"
            className="timer-input"
          />
          <Button 
            variant="contained" 
            className="controls-button"
            onClick={handleSetTimer}
          >
            Set Timer
          </Button>
        </div>
      ) : (
        <>
          <Typography className="timer-display">{formatTime(time)}</Typography>
          <div className="controls">
            <Button
              variant="contained"
              className="controls-button"
              onClick={handleStartPause}
              disabled={time === 0}
            >
              {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button
              variant="contained"
              className="controls-button"
              onClick={handleReset}
            >
              Reset
            </Button>
            {!isActive && (
              <Button
                variant="contained"
                className="controls-button"
                onClick={handleBackToSetting}
              >
                Set Time
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default PomodoroTimer;
