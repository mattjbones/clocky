import React from 'react';
import ClockNumber, { NUMBERS } from '../ClockNumber';
import { VelocityContext } from '../../utils/velocityContext';

function NumberGrid() {
  return (
      <VelocityContext.Provider value={{speed: 4}}>
          <div className="row">
            <ClockNumber number={NUMBERS[0]}/>
            <ClockNumber number={NUMBERS[1]}/>
            <ClockNumber number={NUMBERS[2]}/>
            <ClockNumber number={NUMBERS[3]}/>
            <ClockNumber number={NUMBERS[4]}/>
          </div>
          <div className="row">
            <ClockNumber number={NUMBERS[5]}/>
            <ClockNumber number={NUMBERS[6]}/>
            <ClockNumber number={NUMBERS[7]}/>
            <ClockNumber number={NUMBERS[8]}/>
            <ClockNumber number={NUMBERS[9]}/>
          </div>
      </VelocityContext.Provider>
    );
}

export default NumberGrid;
