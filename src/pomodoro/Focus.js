import React from 'react';
import { minutesToDuration } from '../utils/duration/index';

const Focus = ({ session, focusDuration, setFocusDuration }) => {
  
  const handleMinusClick = () => {
    focusDuration <= 5
      ? setFocusDuration(5)
      : setFocusDuration(focusDuration - 5);
  };

  const handlePlusClick = () => {
    focusDuration >= 60
      ? setFocusDuration(60)
      : setFocusDuration(focusDuration + 5);
  };

  return (
    <div className="Focus col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={handleMinusClick}
            disabled={session ? true : false}
          >
            <span className="oi oi-minus" />
          </button>
          {/* Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={handlePlusClick}
            disabled={session ? true : false}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Focus;
