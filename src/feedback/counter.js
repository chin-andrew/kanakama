import React from 'react';
import './counter.css';

export default (correct, incorrect) => {
  return (
    <div className='counter'>
      <div className='counter__column'>
        <div>
          Correct:
        </div>
        <div className='counter__score'>
          {correct}
        </div>
      </div>
      <div className='counter__column'>
        <div>
          Incorrect:
        </div>
        <div className='counter__score'>
          {incorrect}
        </div>
      </div>
    </div>
  )
}