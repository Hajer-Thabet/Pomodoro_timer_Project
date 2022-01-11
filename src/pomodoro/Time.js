import React from 'react';
import { minutesToDuration, secondsToDuration } from '../utils/duration';

const Time = ({
  session,
  isTimerRunning,
  focusDuration,
  breakDuration,
}) => {
  let totalDuration =
    session?.label === 'Focusing' ? focusDuration * 60 : breakDuration * 60;

  let elapsedTime = totalDuration - session?.timeRemaining;
  let percent = (elapsedTime / totalDuration) * 100;

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for{' '}
            {session?.label === 'Focusing'
              ? minutesToDuration(focusDuration)
              : minutesToDuration(breakDuration)}{' '}
            minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
          <h3>{isTimerRunning ? null : 'Paused'}</h3>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: '20px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percent} // Increase aria-valuenow as elapsed time increases
              style={{ width: `${percent}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
